import { element } from 'prop-types';
import React, { useState } from 'react';

const style = {
    table: {
        borderCollapse: 'collapse'
    },
    tableCell: {
        border: '1px solid gray',
        margin: 0,
        padding: '5px 10px',
        width: 'max-content',
        minWidth: '150px'
    },
    form: {
        container: {
            padding: '20px',
            border: '1px solid #F0F8FF',
            borderRadius: '15px',
            width: 'max-content',
            marginBottom: '40px'
        },
        inputs: {
            marginBottom: '5px'
        },
        submitBtn: {
            marginTop: '10px',
            padding: '10px 15px',
            border: 'none',
            backgroundColor: 'lightseagreen',
            fontSize: '14px',
            borderRadius: '5px'
        }
    }
}

function PhoneBookForm({ addEntryToPhoneBook }) {

    return (
        <form onSubmit={e => { e.preventDefault(); addEntryToPhoneBook(e) }} style={style.form.container}>
            <label>First name:</label>
            <br />
            <input
                style={style.form.inputs}
                className='userFirstname'
                name='userFirstname'
                type='text'
            />
            <br />
            <label>Last name:</label>
            <br />
            <input
                style={style.form.inputs}
                className='userLastname'
                name='userLastname'
                type='text'
            />
            <br />
            <label>Phone:</label>
            <br />
            <input
                style={style.form.inputs}
                className='userPhone'
                name='userPhone'
                type='text'
            />
            <br />
            <input
                style={style.form.submitBtn}
                className='submitButton'
                type='submit'
                value='Add User'
            />
        </form>
    )
}

function InformationTable({ all_data }) {
    return (
        <table style={style.table} className='informationTable'>
            <thead>
                <tr>
                    <th style={style.tableCell}>First name</th>
                    <th style={style.tableCell}>Last name</th>
                    <th style={style.tableCell}>Phone</th>
                </tr>
            </thead>
            <tbody>
                {all_data && all_data.sort((a, b) => {
                    let fa = a.lastName.toLowerCase(),
                        fb = b.lastName.toLowerCase();

                    if (fa < fb) {
                        return -1;
                    }
                    if (fa > fb) {
                        return 1;
                    }
                    return 0;
                }).map((element, index) => (
                    <tr id={index}>
                        <td>{element.name}</td>
                        <td>{element.lastName}</td>
                        <td>{element.number}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

function Application(props) {

    const [data, updateData] = useState([]);

    function addEntryToPhoneBook(e) {
        updateData([...data, {
            name: e.target.userFirstname.value,
            lastName: e.target.userLastname.value,
            number: e.target.userPhone.value
        }])
    }
    return (
        <section>
            <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />
            <InformationTable all_data={data} />
        </section>
    );
}

export default Application