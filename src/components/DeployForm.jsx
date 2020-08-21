import React, { PureComponent } from 'react'
import {
    Button,
    TextInput,
    Loading,
    FormGroup
} from 'carbon-components-react';
import './scss/login-form.scss'
import { withRouter } from 'react-router-dom';
import { deploy } from '../services/api.services';

// import Cookies from 'universal-cookie';

export class DeployForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            spinner: false,
            submitting: false,
            imageName: 'dpg-node-hello',
            project_name: 'dpg-demo',
            showAppURL: false,
            appURL: ''
        };
        this.form = React.createRef();
        this.submitForm = this.submitForm.bind(this);
        this.project_name = React.createRef();
    }
    componentDidMount() {
        // this.preFillData();
        // this.focusOnInput();
    }
    formAction() {

    }
    submitForm(event) {
        event.preventDefault();
        this.setState({
            spinner: true
        })
        let formData = {
            imageName: this.state.imageName,
            project: this.project_name.current.value
        }
        deploy(formData).then((res) => {
            this.setState({
                spinner: false,
                showAppURL: true,
                appURL: res.appurl
            })
            // TODO - Deployed applicaton URL redirection
            // this.props.history.push("/pushimage");

        }).catch((e) => {
            this.setState({
                spinner: false
            })
            console.log(e)
        });
    }
    render() {
        const {
            submitting,
            project_name,
            showAppURL,
            appURL
        } = this.state;
        return (
            <div className={`login-form`}>
                {showAppURL &&
                    <div className={`ibm-row-form`}>
                        <div className={`fields-container`}>
                            <div className={`heading-container`}>
                                <h1 className="form-heading ibm-h2">Deploy application</h1>
                            </div>
                            Deployed App URL : <a href={appURL} rel="noopener noreferrer" target="_blank">{appURL}</a>
                        </div>
                    </div>
                }
                {!showAppURL &&
                    <form
                        name="loginForm"
                        // ref={this.loginForm}
                        method="POST"
                        className={`ibm-row-form`}
                        onSubmit={($event) => { return this.submitForm($event) }}
                        action={this.formAction()}
                        ref={f => (this.form = f)}
                    >
                        <div className={`fields-container`}>
                            <div className={`heading-container`}>
                                <h1 className="form-heading ibm-h2">Deploy application</h1>
                            </div>
                            <FormGroup legendText="">
                                <TextInput
                                    id={`project_name`}
                                    name={`project_name`}
                                    type={`text`}
                                    labelText={'Project Name'}
                                    disabled={submitting}
                                    ref={this.project_name}
                                    defaultValue={project_name}
                                />
                            </FormGroup>
                            <Button type="submit" className="some-class" >
                                Push
                        </Button>
                        </div>
                    </form>
                }
                {
                    this.state.spinner &&
                    <Loading
                        description='Loading...'
                        small={false}
                        withOverlay={true}
                    />
                }
            </div >
        )
    }
}

export default withRouter(DeployForm)