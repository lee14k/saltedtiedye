function Hoodies ({
    name = 'steve jobs',
    email='steve@apple.com',
    tagline='stay hungry'

}) {
    return (
        <div className='contact'>
            <h5 className='name'>{name}</h5>
            <h5 className='email'>{email}</h5>
            <h5 className='tagline'>{tagline}</h5>

        </div>
    )
}
export default Hoodies
