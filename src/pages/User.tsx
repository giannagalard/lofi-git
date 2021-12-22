import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { fetchData } from '../api/github';

export default function User() {
    const { username } = useParams()
    const [valid, setValid] = useState({})
    const [user, setUser] = useState<any>({})
    useEffect(() => {
        setValid(fetchData(username as string, setUser))
      }, []);
    return (
        <div>
            {valid === false ? <h1>Invalid User</h1> : <h1>{user.login}</h1>}
        </div>
    )
}
