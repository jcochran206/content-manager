
import Layout from "components/Layout";
import axios from 'axios';
import {useState} from 'react';

const Default_data = {
    title: "",
    description: "",
    link: "",
    priority: "2",
    timeToFinish: 60
}

const ResourceCreated = () => {
    const [form, setForm] = useState(Default_data);

    const submitForm = () => {
        axios.post('/api/resources', form)
        .then(res => alert(res?.data))
        .catch(err => alert(err?.response?.data));
    }

    const resetForm = () => setForm(Default_data);

    const handleChange = (event) => {
        const {name, value} = event.target; 
        setForm({
            ...form,
            [name]: value
        })
    }

    return(
        <Layout>
            <div className="container">
                <div className="columns">
                    <div className="column is-8 is-offset-2">
                        <div className="resource-form">
                            <h1 className="title">Add New Resource</h1>
                            <form>
                                <div className="field">
                                    <label className="label">Title</label>
                                    <div className="control">
                                    <input className="input" type="text" placeholder="Title" onChange={handleChange} name="title" value={form.title}/>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Description</label>
                                    <div className="control">
                                    <textarea className="textarea" placeholder='description here' onChange={handleChange} name="description" value={form.description}></textarea>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Link</label>
                                    <div className="control">
                                    <input className="input" 
                                        value={form.link}
                                        type="text" 
                                        placeholder="Input link"
                                        name="link"
                                        onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Priority</label>
                                    <div className="control">
                                        <select value={form.priority} onChange={handleChange} name="priority">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="field">
                                <label className="label">Time to finish</label>
                                <div className="control">
                                    <input
                                    value={form.timeToFinish}
                                    onChange={handleChange}
                                    name="timeToFinish"
                                    className="input"
                                    type="number"
                                    placeholder="60" />
                                </div>
                                <p className="help">Time is in minutes</p>
                                </div>

                                <div className="field is-grouped">
                                <div className="control">
                                    <button 
                                    type="button"
                                    onClick={submitForm}
                                    className="button is-link">Submit</button>
                                </div>
                                <div className="control">
                                    <button type="button" onClick={resetForm} className="button is-link is-light">Cancel</button>
                                </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        </Layout>
    )

}

export default ResourceCreated;