import Comingsoon from "../components/Comingsoon";
import Head from 'next/head'

export default function Index() {
    let myPropObj = {
        'a': "this is a test",
        'b': "123",
        'c': "123343433",
    }
    const displayNone = {
        "display": "none"
    }
    return (<>
        <Head>
            <title>M&CSAATCHISPENCER</title>
        </Head>
        <h1 style={displayNone}>M&CSAATCHISPENCER</h1>
        <Comingsoon {...myPropObj} />
        </>)
}