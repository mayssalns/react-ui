'use server'
import { cookies } from 'next/headers'

interface CookieSet {
  name: string
  value: any
}

export async function cookieSet({ name, value }: CookieSet) {
  cookies().set({
    name,
    value,
  })
}

export async function cookieDelete(name: string) {
  cookies().delete(name)
}
