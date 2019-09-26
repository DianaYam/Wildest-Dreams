
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {publishPostAction} from '../../actions/actions';
import {random5} from '../../usefulFunctions/usefulFunctions';
import SectionHeader from '../UI/SectionHeader/SectionHeader';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import './NewPost.css';

class NewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFormValid: false,
            isPublished: false,
            newPostId: random5(),
            formControls: {
                postHeader: {
                    value: '',
                    type: 'text',
                    label: 'Название поста',
                    errorMessage: 'Введите название поста',
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        maxLength: 110
                    }
                },
                postText: {
                    value: '',
                    type: 'textarea',
                    label: 'Содержание поста',
                    errorMessage: 'Введите содержание поста',
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        maxLength: 5000
                    }
                }
            }
        };
        this.createNewPost = this.createNewPost.bind(this);
        this.publishAgain = this.publishAgain.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    submitHandler = event => {
        event.preventDefault();
    };

    createNewPost = () => {
        const header = this.state.formControls.postHeader.value;
        const text = this.state.formControls.postText.value;

        this.props.publishPost(this.state.newPostId, this.props.author, header, text);

        this.setState({
            isPublished : true
        });
    };

    publishAgain = () => {
        this.setState({
            isFormValid: false,
            isPublished: false,
            newPostId: random5(),
            formControls: {
                postHeader: {
                    value: '',
                    type: 'text',
                    label: 'Название поста',
                    errorMessage: 'Введите название поста',
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        maxLength: 110
                    }
                },
                postText: {
                    value: '',
                    type: 'textarea',
                    label: 'Содержание поста',
                    errorMessage: 'Введите содержание поста',
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        maxLength: 5000
                    }
                }
            }
        });
    };

    validateControl = (value, validation) => {
        if (!validation) {
            return true
        }

        let isValid = true;

        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }

        if (validation.maxLength) {
            isValid = value.length <= validation.maxLength && isValid
        }

        return isValid
    };

    onChangeHandler = (event, controlName) => {
        const formControls = { ...this.state.formControls };
        const control = { ...formControls[controlName] };

        control.value = event.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value, control.validation);

        formControls[controlName] = control;

        let isFormValid = true;

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        });

        this.setState({
            formControls, isFormValid
        })
    };

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={event => this.onChangeHandler(event, controlName)}
                />
            )
        })
    }

    render() {
        return (
            <div className="NewPostWrapper">
                <SectionHeader headerText="Опубликовать новый пост"/>
                {!this.state.isPublished
                    ?
                    <div className="NewPost">
                        <form onSubmit={this.submitHandler}>
                            { this.renderInputs() }
                            <Button type="button" title="Опубликовать" onClick={this.createNewPost} disabled={!this.state.isFormValid} />
                        </form>
                    </div>
                    :
                    <div className="publishMessage">
                        <p>Пост&ensp;
                            <i className="fa fa-quote-left" aria-hidden="true" />
                            <span>{this.state.formControls.postHeader.value}</span>
                            <i className="fa fa-quote-right" aria-hidden="true" />
                            &ensp;успешно опубликован и доступен по ссылке:
                        </p>
                        <div>
                            <Link to={"/posts/" + this.state.newPostId }>wildest-dreams.ru/posts/{ this.state.newPostId }</Link>
                        </div>
                        <div>
                            <Link to="/new-post">
                                <Button title="Написать ещё пост" withArrow={true} onClick={this.publishAgain} />
                            </Link>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        author: state.currentUser
    }
}

function mapDispatchToProps(dispatch) {
    return {
        publishPost: (id, author, title, text) => dispatch(publishPostAction(id, author, title, text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)

