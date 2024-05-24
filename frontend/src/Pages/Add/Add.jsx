import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import {Helmet} from "react-helmet-async"

const Add = () => {

    const [data, setData] = useState([])

    async function fetchData() {
        const response = await fetch("http://localhost:5000/api/foods");
        const api = await response.json();
      }

      useEffect(() => {
        fetchData()
      }, [])
      
      async function addDataFormik(data) {
        const response = await fetch("http://localhost:5000/api/foods" , {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data)
        });
        fetchData()
      }

      async function DeleteFormik(item) {
        const response = await fetch("http://localhost:5000/api/foods" , {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data)
        });
        fetchData()
      }

      const handleSearch = (e) => {
        console.log(e.target.value) 
      }

  return (
    <div>
        {/* <Helmet>
            <title>Add</title>
        </Helmet> */}
      <Formik
       initialValues={{ title: '', content: '', price: '' }}
       validationSchema={Yup.object({
         title: Yup.string().required('Required'),
         content: Yup.string().required('Required'),
         price: Yup.string().required('Required'),
       })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           setData(values)
           setSubmitting(false);
         }, 400);
       }}
     >
       <Form>
         <label htmlFor="title">Title</label>
         <Field name="title" type="text" />
         <ErrorMessage name="title" />
 
         <label htmlFor="content">Content</label>
         <Field name="content" type="text" />
         <ErrorMessage name="content" />
 
         <label htmlFor="price">Price</label>
         <Field name="price" type="price" />
         <ErrorMessage name="price" />
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>
       <input type="text" />
     <table>
        <thead>
            <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Price</th>
            <th>Delete</th>
            </tr>
        </thead>
        
            {data.map((elem) => {
                return (
                    <div>
                    <tbody>
                        <td>{elem.title}</td>
                        <td>{elem.content}</td>
                        <td>{elem.price}</td>
                        <button onClick={(e) => DeleteFormik(e.target.value)}>Remove</button>
                        </tbody>
                    </div>
                )
            })}
            
        
     </table>
    </div>
  )
}

export default Add
