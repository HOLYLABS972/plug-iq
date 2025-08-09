# Vercel Environment Variables Setup

## Step-by-Step Instructions:

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Select your PlugIQ project**
3. **Go to Settings tab**
4. **Click "Environment Variables" in the sidebar**
5. **Add each variable below:**

## Environment Variables to Add:

### Variable 1:
- **Name**: `NEXT_PUBLIC_FIREBASE_API_KEY`
- **Value**: `AIzaSyB38h2hHaVaqrGpotg7k1xLGPEaB6n-IJA`
- **Environment**: Production, Preview, Development (check all)

### Variable 2:
- **Name**: `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- **Value**: `ev-charger-326db.firebaseapp.com`
- **Environment**: Production, Preview, Development (check all)

### Variable 3:
- **Name**: `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- **Value**: `ev-charger-326db`
- **Environment**: Production, Preview, Development (check all)

### Variable 4:
- **Name**: `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- **Value**: `ev-charger-326db.firebasestorage.app`
- **Environment**: Production, Preview, Development (check all)

### Variable 5:
- **Name**: `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- **Value**: `505620534225`
- **Environment**: Production, Preview, Development (check all)

### Variable 6:
- **Name**: `NEXT_PUBLIC_FIREBASE_APP_ID`
- **Value**: `1:505620534225:web:5901c8b772afdad7a5c6f0`
- **Environment**: Production, Preview, Development (check all)

### Variable 7:
- **Name**: `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`
- **Value**: `G-QELQD0YDV8`
- **Environment**: Production, Preview, Development (check all)

## After Adding Variables:

1. **Click "Save" for each variable**
2. **Redeploy your project** (or trigger a new deployment)
3. **Your Firebase will work in production!**

## Quick Copy-Paste Format:

```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyB38h2hHaVaqrGpotg7k1xLGPEaB6n-IJA
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=ev-charger-326db.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=ev-charger-326db
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=ev-charger-326db.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=505620534225
NEXT_PUBLIC_FIREBASE_APP_ID=1:505620534225:web:5901c8b772afdad7a5c6f0
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-QELQD0YDV8
```

