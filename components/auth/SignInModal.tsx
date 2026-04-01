'use client'

import * as React from 'react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { ShoppingBagIcon } from 'lucide-react'

interface SignInModalProps {
  children?: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function SignInModal({ children, open, onOpenChange }: SignInModalProps) {
  const [email, setEmail] = useState('')
  const [newsletter, setNewsletter] = useState(false)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}
      <DialogContent className="sm:max-w-md bg-white p-0 overflow-hidden">
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 px-8 py-6">
          <DialogHeader className="text-center space-y-2">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-bold text-xl">
                cdkeyDeals
              </div>
            </div>
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Sign in
            </DialogTitle>
            <DialogDescription className="text-gray-600 text-sm">
              Sign in or create an account
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="px-8 py-6 space-y-6">
          {/* Shop Button */}
          <Button 
            className="w-full h-12 bg-[#5A31F4] hover:bg-[#4A28E3] text-white font-medium rounded-lg flex items-center justify-center gap-3 transition-colors"
            size="lg"
          >
            <ShoppingBagIcon className="w-5 h-5" />
            Continue with Shop
          </Button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">or</span>
            </div>
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
            />
          </div>

          {/* Continue Button */}
          <Button 
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            size="lg"
            disabled={!email}
          >
            Continue
          </Button>

          {/* Newsletter Checkbox */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="newsletter"
              checked={newsletter}
              onCheckedChange={(checked) => setNewsletter(checked as boolean)}
            />
            <Label 
              htmlFor="newsletter" 
              className="text-sm text-gray-600 cursor-pointer"
            >
              Email me with news and offers
            </Label>
          </div>

          {/* Terms Footer */}
          <div className="text-center">
            <p className="text-xs text-gray-500">
              By continuing, you agree to our{' '}
              <button className="text-blue-600 hover:text-blue-700 underline">
                Terms of service
              </button>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
