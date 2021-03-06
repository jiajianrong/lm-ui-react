import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

/*
 * |   参数    | 说明 | 类型 | 默认值 | 是否必要 |
 * | ---------- | ------ | ------ | --------- |
 * | btnMap | 选择按钮的信息 | array[{ text: string or number, value: string or number }] | [...] | 必要 |
 * | selectedValue | 被选中的值 | string or number or bool | 无 | 必要 |
 * | onChange | 选择时，调用此函数 | func | ()=>{} | 必要 |
 *
 *<CheckBtn
 *	btnMap={[{ text: '有', value: true }, { text: '无', value: false }]}
 *	selectedValue={this.state.checkBtn}
 *	onChange={(val) => {this.setState({ checkBtn: val })}} />
 */

const propTypes = {

	btnMap: PropTypes.array.isRequired,
	selectedValue: PropTypes.oneOfType([
    	PropTypes.string,
    	PropTypes.number,
    	PropTypes.bool
  	]).isRequired,
  	onChange: PropTypes.func.isRequired

};

const defaultProps = {

	btnMap: [],
	onChange: () => {}

};
const CheckBtn = (props) => {

	const { btnMap, selectedValue, onChange, ...arg } = props;

	return (

		<div className="lm-ui-check-btn-wrap">

			{

				btnMap.map((item, index) => {

					return <div className="lm-ui-check-btn-cont" key={index}>

						<input 
							type="radio" 
							className="lm-ui-check-btn" 
							value={item.value}
							checked={selectedValue === item.value}
							onChange={onChange.bind(null, item.value)} />
						<span className="lm-ui-check-btn-appearance">{item.text}</span>

					</div>

				})

			}

		</div>

	)

};

CheckBtn.propTypes = propTypes;
CheckBtn.defaultProps = defaultProps;
export default CheckBtn;