
import Layout from "components/Layout";

const ResourceCreated = () => {

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
                                    <input className="input" type="text" placeholder="Title"/>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Description</label>
                                    <div className="control">
                                    <textarea className="textarea" placeholder='description here'></textarea>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Link</label>
                                    <div className="control">
                                    <input className="input" 
                                        type="text" 
                                        placeholder="Input link"/>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Priority</label>
                                    <div className="control">
                                        <select>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Time to Finish</label>
                                    <div className="control">
                                    <input className="input" type="number" placeholder="60 (time is in mins)"/>
                                    </div>
                                </div>

                                <div className="field is-grouped">
                                <div className="control">
                                    <button className="button is-link">Submit</button>
                                </div>
                                <div className="control">
                                    <button className="button is-link is-light">Cancel</button>
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