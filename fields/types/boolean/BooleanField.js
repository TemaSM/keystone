import React from 'react';
import Field from '../Field';
import Checkbox from '../../components/Checkbox';
import { FormField } from 'elemental';

module.exports = Field.create({
	displayName: 'BooleanField',
	statics: {
		type: 'Boolean',
	},
	propTypes: {
		indent: React.PropTypes.bool,
		label: React.PropTypes.string,
		onChange: React.PropTypes.func.isRequired,
		path: React.PropTypes.string.isRequired,
		value: React.PropTypes.bool,
	},

	valueChanged (value) {
		this.props.onChange({
			path: this.props.path,
			value: value,
		});
	},
	renderFormInput () {
		if (!this.shouldRenderField()) return;

		return (
			<input
				name={this.props.path}
				type="hidden"
				value={!!this.props.value}
			/>
		);
	},
	renderUI () {
		const { indent, value, label, path } = this.props;

		return (
			<div data-field-name={path} data-field-type="boolean">
				<FormField offsetAbsentLabel={indent}>
					<label style={{ height: '2.3em' }}>
						{this.renderFormInput()}
						<Checkbox
							checked={value}
							onChange={this.shouldRenderField() && this.valueChanged}
							readonly={!this.shouldRenderField()}
						/>
						<span style={{ marginLeft: '.75em' }}>
							{label}
						</span>
					</label>
					{this.renderNote()}
				</FormField>
			</div>
		);
	},
});
