import {withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const CompletedButton = withStyles((theme) => ({
    outlined: {
        '& disabled':{
            border: '3px solid #72776B',
        }
    },
}))(Button);

export default(CompletedButton);
