import Button from '../Button';
import React, { Component, PropTypes, View } from 'react-native';

const propTypes = {
    actions: PropTypes.array.isRequired,
    onActionPress: PropTypes.func.isRequired,
};

const defaultStyles = {
    dialogContainer: {
        flexDirection: 'row',
    },
    actionContainer: {
        marginLeft: 8,
    }
};

class DialogDefaultActions extends Component {
    constructor(props) {
        super(props);

        this.onActionPressed = this.onActionPressed.bind(this);
    }
    onActionPressed(action) {
        const { onActionPress } = this.props;

        if (onActionPress) {
            onActionPress(action);
        }
    }
    render() {
        const { actions } = this.props;

        return (
            <View style={defaultStyles.dialogContainer}>
                {actions.map(action =>
                    <View style={defaultStyles.actionContainer}>
                        <Button text={action} onPress={this.onActionPressed} />
                    </View>
                )}
            </View>
        );
    }
}

DialogDefaultActions.propTypes = propTypes;

export default DialogDefaultActions;