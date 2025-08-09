import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';

export async function GET() {
  try {
    const q = query(collection(db, 'deletion-requests'), orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);
    
    const deletionRequests = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      // Convert Firestore timestamp to ISO string for JSON serialization
      timestamp: doc.data().timestamp?.toDate?.()?.toISOString() || new Date().toISOString()
    }));

    return NextResponse.json(deletionRequests);
  } catch (error) {
    console.error('Error fetching deletion requests:', error);
    return NextResponse.json(
      { error: 'Failed to fetch deletion requests' },
      { status: 500 }
    );
  }
}
