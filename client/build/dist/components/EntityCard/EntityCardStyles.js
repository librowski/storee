import { createStyles } from "@material-ui/core";
import characterAvatarJpg from "../../assets/img/character-avatar.jpg";
export var entityCardStyles = createStyles({
    imageContainer: {
        "position": "absolute",
        "top": 0,
        "width": "100%",
        "height": "100%",
        "transition": "all 300ms ease",
        "background": "url({" + characterAvatarJpg + ") no-repeat center",
        "backgroundSize": "cover",
        "&:hover": {
            filter: "grayscale(100%)",
        },
    },
    paper: {
        "position": "relative",
        "cursor": "pointer",
        "paddingTop": "100%",
        "width": "100%",
        "&:hover": {
            "& > div:first-child": {
                filter: "grayscale(100%)",
            },
            "& > div:last-child": {
                "height": "100%",
                "& > :first-child": {
                    opacity: 0.5,
                    top: "2em",
                },
                "& > :last-child": {
                    opacity: 1,
                    transform: "translate(-50%, -50%)",
                },
            },
        },
    },
    textContainer: {
        position: "absolute",
        backgroundColor: "#00000099",
        height: "33.33%",
        width: "100%",
        bottom: 0,
        color: "#FFF",
        overflow: "hidden",
        transition: "all 320ms ease",
    },
    nameText: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        opacity: 1,
        transition: "all 320ms ease",
        width: "90%",
    },
    descriptionDiv: {
        transition: "all 320ms ease",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, 200px)",
        opacity: 1,
        width: "90%",
    },
    descriptionText: {},
});
//# sourceMappingURL=EntityCardStyles.js.map