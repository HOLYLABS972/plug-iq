import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, reason } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Save deletion request to Firebase
    const docRef = await addDoc(collection(db, 'deletion-requests'), {
      name,
      email,
      reason: reason || 'No reason provided',
      status: 'pending',
      timestamp: serverTimestamp(),
    });

    console.log('Data deletion request submitted with ID: ', docRef.id);

    return NextResponse.json(
      { message: 'Data deletion request submitted successfully', id: docRef.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving deletion request:', error);
    return NextResponse.json(
      { error: 'Failed to submit deletion request' },
      { status: 500 }
    );
  }
}
