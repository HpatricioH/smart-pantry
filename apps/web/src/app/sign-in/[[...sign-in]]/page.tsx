import { SignIn } from "@clerk/nextjs"

export default function Page() {
  return (
    <section className="flex justify-center items-center h-screen">
      <SignIn
        appearance={{
          elements: {
            footer: {
              display: 'none',
            },
            logoBox: {
              height: 'calc(10rem)'
            }
          }
        }}
      />
    </section>
  )
}