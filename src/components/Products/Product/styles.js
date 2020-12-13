import { makeStyles } from '@material-ui/core/styles'
//import { FullscreenExit } from '@material-ui/icons'

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
    },
    media: {
        height:'0',
        paddingTop:'56.25%'
    },
    cardActions:{
        display:'flex',
        alignItems:'flex-end',
    },
    cardContent:{
        display:'flex',
        justifyContent:'space-between',
    }
}))