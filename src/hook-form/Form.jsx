import React from 'react'
import { useForm } from 'react-hook-form';

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f0f0f0',
        }}>
            <form onSubmit={handleSubmit(onSubmit)}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    backgroundColor: '#fff',
                    padding: '20px',
                    borderRadius: '10px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    width: '300px',
                    gap: '10px',
                }}>
                <h1 style={{ marginBottom: 10 }}>React Hook Form</h1>

                {/* First Name */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <input
                        type="text"
                        {...register('firstName', { required: "First Name is required" })}
                        placeholder='First Name'
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            boxSizing: 'border-box',
                        }}
                    />
                    {errors.firstName && (
                        <span style={{
                            color: 'red',
                            fontSize: '12px',
                            marginTop: '2px'
                        }}>
                            {errors.firstName.message}
                        </span>
                    )}
                </div>

                {/* Middle Name */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <input
                        type="text"
                        {...register('middleName', { required: "Middle Name is required" })}
                        placeholder='Middle Name'
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            boxSizing: 'border-box',
                        }}
                    />
                    {errors.middleName && (
                        <span style={{
                            color: 'red',
                            fontSize: '12px',
                            marginTop: '2px'
                        }}>
                            {errors.middleName.message}
                        </span>
                    )}
                </div>

                {/* Last Name */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <input
                        type="text"
                        {...register('lastName', { required: "Last Name is required" })}
                        placeholder='Last Name'
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            boxSizing: 'border-box',
                        }}
                    />
                    {errors.lastName && (
                        <span style={{
                            color: 'red',
                            fontSize: '12px',
                            marginTop: '2px'
                        }}>
                            {errors.lastName.message}
                        </span>
                    )}
                </div>

                <button type='submit' style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    backgroundColor: '#007BFF',
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: '16px',
                    marginTop: '10px'
                }}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Form
