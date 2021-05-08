import Comingsoon from "../../components/Comingsoon";

export default function Index() {
    let myPropObj = {
        'a': "this is a test",
        'b': "123",
        'c': "123343433",
    }
    return (<><Comingsoon {...myPropObj} /></>)
}