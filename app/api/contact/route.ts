import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Save to Firebase
    const docRef = await addDoc(collection(db, 'contacts'), {
      name,
      email,
      message,
      timestamp: serverTimestamp(),
    });

    console.log('Document written with ID: ', docRef.id);

    return NextResponse.json(
      { message: 'Contact form submitted successfully', id: docRef.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving contact:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}
