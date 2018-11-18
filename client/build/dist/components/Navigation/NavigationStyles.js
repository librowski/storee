import { createStyles } from "@material-ui/core";
var drawerWidth = 240;
export var NavigationStyles = function (theme) {
    var _a, _b, _c;
    return createStyles({
        root: {
            flexGrow: 1,
            flexDirection: "column",
            minHeight: "100vh",
            zIndex: 1,
            position: "relative",
            display: "flex",
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            backgroundColor: theme.palette.primary.dark,
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: "calc(100% - " + drawerWidth + "px)",
            transition: theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginLeft: 12,
            marginRight: 36,
        },
        hide: {
            display: "none",
        },
        drawerPaper: {
            position: "absolute",
            whiteSpace: "nowrap",
            width: drawerWidth,
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            overflow: "hidden",
        },
        drawerPaperClose: (_a = {
                transition: theme.transitions.create("width", {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing.unit * 7
            },
            _a[theme.breakpoints.up("sm")] = {
                width: theme.spacing.unit * 9,
            },
            _a),
        toolbar: (_b = {
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                padding: "0 8px",
                height: "56px"
            },
            _b[theme.breakpoints.up("sm")] = {
                height: "64px",
            },
            _b),
        content: (_c = {
                flexGrow: 1,
                backgroundColor: theme.palette.background.default,
                padding: theme.spacing.unit * 3,
                transition: theme.transitions.create("marginLeft", {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                marginLeft: theme.spacing.unit * 7
            },
            _c[theme.breakpoints.up("sm")] = {
                marginLeft: theme.spacing.unit * 9,
            },
            _c),
        contentBlur: {
            filter: "brightness(50%) blur(3px)",
            pointerEvents: "none",
        },
    });
};
//# sourceMappingURL=NavigationStyles.js.map