import {createStyles, Theme} from "@material-ui/core";

export const AvatarCardStyles = (theme: Theme) => createStyles({
    card: {
        height: 40 * theme.spacing.unit,
        position: 'relative',
        background: `linear-gradient(180deg, ${theme.palette.primary.main} 50%, ${theme.palette.background.paper} 50%)`,
        marginBottom: 3 * theme.spacing.unit,
        '@media(max-width: 635px)': {
            marginBottom: 6 * theme.spacing.unit,
        }
    },
    contentContainer: {
        position: 'absolute',
        width: `calc(100% - ${20 * theme.spacing.unit}px)`,
        height: '80%',
        zIndex: 2,
        top: '50%',
        left: 0,
        transform: 'translate(0, -50%)',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        '@media(max-width: 635px)': {
            justifyContent: 'center',
            width: '100%',
        }
    },
    avatar: {
        height: 32 * theme.spacing.unit,
        width: 32 * theme.spacing.unit,
        borderRadius: '100%',
        marginRight: -16 * theme.spacing.unit,
        zIndex: 3,
        '@media(max-width: 635px)': {
            marginRight: 0,
            height: -24 * theme.spacing.unit,
            width: -24 * theme.spacing.unit,
            zIndex: 1,
        },
        background: `url(https://picsum.photos/300/300/?random?t=${Date.now()}) no-repeat center`,
        backgroundSize: 'cover',
    },
    nameContainer: {
        position: 'absolute',
        top: 0,
        zIndex: 2,
        textAlign: 'center',
        width: '100%',
        minHeight: 6 * theme.spacing.unit,
        background: theme.palette.primary.dark,
        color: '#FFF',
        display: 'flex',
        alignItems: 'center',
        '@media(max-width: 635px)': {
            justifyContent: 'center',
            top: -4 * theme.spacing.unit,
        }
    },
    name: {
        marginLeft: 2 * theme.spacing.unit,
        '@media(max-width: 635px)': {
            marginLeft: 0,
        }
    },
    badgesContainer: {
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: theme.spacing.unit,
        '@media(max-width: 635px)': {
            paddingRight: 0,
            position: 'absolute',
            bottom: -8 * theme.spacing.unit,
        }
    },
    badge: {
        margin: theme.spacing.unit,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 6 * theme.spacing.unit,
        width: 6 * theme.spacing.unit,
        color: theme.palette.primary.contrastText,
        background: theme.palette.secondary.main,
        borderRadius: '100%',
    }
});