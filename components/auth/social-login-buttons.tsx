import { Button } from "@/components/ui/button"

const SocialLoginButtons = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <Button variant="outline" className="w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 mr-2">
          <path
            fill="currentColor"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            fill="currentColor"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            fill="currentColor"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            fill="currentColor"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        Google
      </Button>
      <Button variant="outline" className="w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 mr-2">
          <path
            fill="currentColor"
            d="M21.86 12.86a9.85 9.85 0 0 1-1.9 5.86A9.98 9.98 0 0 1 12 23a9.98 9.98 0 0 1-7.96-4.28A9.85 9.85 0 0 1 2.14 12.86c0-2.08.64-4.02 1.72-5.62.1-.13.21-.26.32-.38A9.96 9.96 0 0 1 12 3a9.96 9.96 0 0 1 7.82 3.86c.11.12.22.25.32.38a9.85 9.85 0 0 1 1.72 5.62z"
          />
          <path fill="#fff" d="M16.78 7.5H7.22v9h9.56v-9z" />
          <path fill="currentColor" d="M16.5 11.5h-3v-3h-3v3h-3v3h3v3h3v-3h3v-3z" fill="#0078D4" />
        </svg>
        Microsoft
      </Button>
      <Button variant="outline" className="w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 mr-2">
          <path
            fill="currentColor"
            d="M17.05 20.28c-.98.95-2.05.88-3.08.45-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.45C2.08 14.34 3.23 6.56 9.09 6.28c1.4.02 2.37.96 3.3.96 1.01 0 2.26-1.06 3.99-.9 1.82.22 3.2 1.09 4.05 2.77-3.23 2.04-2.67 6.14.54 7.67-.61 1.95-1.51 3.89-3.92 3.5z"
          />
          <path fill="currentColor" d="M12.03 6.3C11.64 4.02 13.37 2.1 15.5 2c.53 2.53-1.75 4.6-3.47 4.3z" />
        </svg>
        Apple
      </Button>
    </div>
  )
}

export default SocialLoginButtons
