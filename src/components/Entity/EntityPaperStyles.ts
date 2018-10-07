import {createStyles, Theme} from "@material-ui/core";

export const EntityPaperStyles = (theme: Theme) => createStyles({
    mainWrapper: {
        position: 'relative',
        flex: '1 1 auto',
        display: 'flex',
        flexDirection: 'column',
    },
    paperHeader: {
        width: '100%',
        position: 'absolute',
        top: -1 * theme.spacing.unit,
        display: 'flex',
        alignItems: 'center',
    },
    paperTopLine: {
        height: '1px',
        background: '#C6CECD',
        flex: '1 1 auto',
    },
    paperTopCircle: {
        height: theme.spacing.unit,
        width: theme.spacing.unit,
        borderRadius: '100%',
        background: '#C6CECD',
    },
    paperTitle: {
        marginLeft: 2 * theme.spacing.unit,
        marginRight: 2 * theme.spacing.unit,
    },
    contentContainer: {
        flex: '1 1 auto',
        padding: 4 * theme.spacing.unit,
    }
});