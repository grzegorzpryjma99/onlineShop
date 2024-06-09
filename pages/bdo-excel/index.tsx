import dynamic from "next/dynamic";
import {Loader} from "@/components/common/Loader";

export default function BdoDateConverter() {

    const BdoConvert = dynamic(
        () => import('@/components/bdo/BdoConverter'),
        {
            loading: () => <Loader/>,
            ssr: false
        }
    )

    return (
        <BdoConvert/>
    )
}