import {createStyles} from "@material-ui/core";

export const AvatarCardStyles = createStyles({
    card: {
        height: '20em',
        position: 'relative',
        background: 'linear-gradient(180deg, #6C7574 50%, #FFF 50%)',
    },
    contentContainer: {
        position: 'absolute',
        width: 'calc(100% - 10em)',
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
        height: '16em',
        width: '16em',
        borderRadius: '100%',
        marginRight: '-8em',
        zIndex: 3,
        '@media(max-width: 635px)': {
            marginRight: 0,
            height: '12em',
            width: '12em',
            zIndex: 1,
        }
    },
    nameContainer: {
        position: 'absolute',
        top: 0,
        zIndex: 2,
        textAlign: 'center',
        width: '100%',
        minHeight: '3em',
        background: '#2D3132',
        color: '#FFF',
        display: 'flex',
        alignItems: 'center',
        '@media(max-width: 635px)': {
            justifyContent: 'center',
            top: '-2em',
        }
    },
    name: {
        marginLeft: '1em',
        '@media(max-width: 635px)': {
            marginLeft: 0,
        }
    },
    badgesContainer: {
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: '0.5em',
        '@media(max-width: 635px)': {
            paddingRight: 0,
            position: 'absolute',
            bottom: '-4em',
        }
    },
    badge: {
        margin: '0.5em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '3em',
        width: '3em',
        color: '#6C7574',
        borderRadius: '100%',
    }
});