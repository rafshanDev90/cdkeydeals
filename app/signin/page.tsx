'use client'

import { Button } from '@/components/ui/button'
import { SignInModal } from '@/components/auth/SignInModal'

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Welcome to cdkeyDeals</h1>
          <p className="text-gray-600">Experience the best deals on game keys and software</p>
        </div>
        
        <SignInModal>
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            Sign In
          </Button>
        </SignInModal>
        
        <p className="text-sm text-gray-500">
          Click the button above to open the sign-in modal
        </p>
      </div>
    </div>
  )
}
