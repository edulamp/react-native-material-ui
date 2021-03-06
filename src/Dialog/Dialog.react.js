import { View, TouchableNativeFeedback } from 'react-native';
import React, { Component, PropTypes } from 'react';

import Title from './Title.react';
import Content from './Content.react';
import Actions from './Actions.react';

const propTypes = {
    theme: PropTypes.string,
    overrides: PropTypes.shape({
        backgroundColor: PropTypes.string,
        rippleColor: PropTypes.string,
    }),
    elevation: PropTypes.number,
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
};
const defaultProps = {
    style: {},
};
const contextTypes = {
    uiTheme: PropTypes.object.isRequired,
};

function getStyles(props, context) {
    const { dialog } = context.uiTheme;

    return {
        container: [
            dialog.container,
            props.style.container,
        ],
    };
}

class Dialog extends Component {
    render() {
        const { onPress, children } = this.props;

        const styles = getStyles(this.props, this.context);

        return (
            <TouchableNativeFeedback onPress={onPress} >
                <View style={styles.container}>
                    {children}
                </View>
            </TouchableNativeFeedback>
        );
    }

}

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;
Dialog.contextTypes = contextTypes;

Dialog.Title = Title;
Dialog.Content = Content;
Dialog.Actions = Actions;

export default Dialog;
