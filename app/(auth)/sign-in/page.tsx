// import React from 'react'
// import AuthForm from '@/components/AuthForm'
// import { BackgroundBoxesDemo } from '@/components/ui/BackgroundBoxesDemo'

// const Page = () => {
//   return (
//     // <AuthForm type="sign-in" /> 
//          <BackgroundBoxesDemo type="sign-in/>
//   )
// }

// export default Page

import React from 'react'
import { BackgroundBoxesDemo } from '@/components/ui/BackgroundBoxesDemo'
// import AuthForm from '@/components/AuthForm' // optional

const SignInPage: React.FC = () => {
  return (
    <>
      {/* <AuthForm type="sign-in" /> */}
      <BackgroundBoxesDemo type="sign-in" />
    </>
  )
}

export default SignInPage
