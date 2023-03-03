import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.scss';
import icon_check from '../../img/check.svg';

class Checkbox extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        if(this.props.isChecked !== nextProps.isChecked) return true;

        return false;
    }

    handleClick = () => {
        this.props.onClickHandler(!this.props.isChecked)
    };

	render() {
        let value = this.props.isChecked;

        return (
            <div key={this.props.name}
                className={`custom-checkbox${value ? ' checked' : ''}`}
                onClick={this.handleClick}>
                <div className={'custom-checkbox-box'}/>
                <img className={'custom-checkbox-icon'} src={icon_check} alt=""/>
                <p className="" dangerouslySetInnerHTML={{__html: this.props.name}}/>
            </div>
        );
    }
}

Checkbox.propTypes = {
	isChecked: PropTypes.bool,
	name: PropTypes.string,
    onClickHandler: PropTypes.func
};

export default Checkbox;