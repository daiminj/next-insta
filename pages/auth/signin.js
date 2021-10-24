import {getProviders,signIn as SignIntoProvider} from "next-auth/react"

//Browers
export default function signin({providers}) {
    return (
        <>
           {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                <button onClick={() => 
                    SignIntoProvider(provider.id)}>
                    Sign in with {provider.name}
                </button>
                </div>
      ))}
        </>
    )
}

export async function getServerSideProps(){
    const providers = getProviders();
    return {
        props:{
            providers
        }
    }

}
