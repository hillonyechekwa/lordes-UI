import {useMutation, useQuery, gql, redirect} from '@apollo/client'
import BioLoc from './BioLocForm'


const CREATE_NEW_BIOLOC = gql`
    mutation createBioLoc($bio: String, $location: String){
        updateBio(bio: $bio, location: $location){
            id
            username
            bio
            location
        }
    }
`


const GET_USER_ROLE = gql`
    query user{
        me{
            role
        }
    }
`


const BioLoc = () => {

    const {data} = useQuery(GET_USER_ROLE)


    const [updateBio, {loading, error}] = useMutation(CREATE_NEW_BIOLOC, {
        onCompleted: updateBio => {
            data.me.role === 'STYLIST'? redirect('/onboarding/service'): redirect('/')
        }
    })


    if (loading) return <Spinner message="" size="mid" />
    if (error) return <p>There was an error {error.message}</p>


    return (
        <BioLocForm  action={updateBio} />
    )
    
    
}