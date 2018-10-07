import {createStyles} from "@material-ui/core";

export const EntityPaperStyles = createStyles({
    mainWrapper: {
        position: 'relative',
        flex: '1 1 auto',
        display: 'flex',
        flexDirection: 'column',
    },
    paperHeader: {
        width: '100%',
        position: 'absolute',
        top: '-0.5em',
        display: 'flex',
        alignItems: 'center',
    },
    paperTopLine: {
        height: '1px',
        background: '#C6CECD',
        flex: '1 1 auto',
    },
    paperTopCircle: {
        height: '0.5em',
        width: '0.5em',
        borderRadius: '100%',
        background: '#C6CECD',
    },
    paperTitle: {
        margin: '0 1em 0 1em',
    },
    contentContainer: {
        flex: '1 1 auto',
        padding: '2em',
    }
});