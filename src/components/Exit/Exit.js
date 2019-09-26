
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {exitAction} from '../../actions/actions';
import SectionHeader from '../UI/SectionHeader/SectionHeader';
import Button from '../UI/Button/Button';
import './Exit.css';

class Exit extends React.Component {

    exitHandler = () => {
        this.props.exit();
    };

    render() {
        return (
            <div className="Exit">
                <SectionHeader headerText="Выход из Личного кабинета" />

                <div className="ExitQuestionWrapper">
                    <p className="ExitQuestion">Вы действительно хотите выйти из Личного кабинета?</p>

                    <Button type="button" title="Выход" onClick={this.exitHandler} />

                    <Link to="/">
                        <Button type="button" title="Отмена" />
                    </Link>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        exit: () => dispatch(exitAction())
    }
}

export default connect(null, mapDispatchToProps)(Exit);

