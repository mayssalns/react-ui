import { RequestInit } from 'next/dist/server/web/spec-extension/request'
import qs from 'qs'

const API_BACKEND = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api`

let RequestOptions: RequestInit = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
  },
}

export const strapi = {
  async get(path: string, query: { [key: string]: string }) {
    RequestOptions = {
      ...RequestOptions,
      next: {
        revalidate: 60,
      },
    }

    const queryString = qs.stringify(query)
    const requestUrl = `${API_BACKEND}${path}${
      queryString ? `?${queryString}` : ''
    }`

    // Trigger API call
    const response = await fetch(requestUrl, RequestOptions)

    // Handle response
    if (!response.ok) {
      console.error(response.statusText)
      console.warn(response.statusText)
      throw new Error(`An error occured please try again`)
    }
    const data = await response.json()
    return data
  },
  async post(path: string, form: { [key: string]: any }) {
    RequestOptions = {
      ...RequestOptions,
      method: 'POST',
      body: JSON.stringify({ data: form }),
    }

    // Trigger API call
    const response = await fetch(`${API_BACKEND}${path}`, RequestOptions)

    // Handle response
    if (!response.ok) {
      console.error(response.statusText)
      console.warn(response.statusText)
      throw new Error(`An error occured please try again`)
    }

    return await response.json()
  },
}
