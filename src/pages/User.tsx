import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { fetchData } from '../api/github';

export default function User() {
    const { username } = useParams()
    const [valid, setValid] = useState(false)
    const [user, setUser] = useState<any>({})
    useEffect(() => {
        fetchData(username as string, setUser as Function, setValid as Function)
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    return (
        <div>
            {valid === false ? <h1>Invalid User</h1> : <h1>{user.login}</h1>}
        </div>
    )
}
