import { useAllUsers } from "./hooks/alluser"

const AllUser = () => {
    const { data, error, isLoading } = useAllUsers()
    return (
        <div className="flex justify-center items-center">
            {isLoading ? <p>Loading...</p>
                :
                < table border={1} className="border-collapse" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Company</th>
                            <th>Address</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data?.map((user: any) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.company.name}</td>
                                <td>{user.address.city}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>

    )
}

export default AllUser