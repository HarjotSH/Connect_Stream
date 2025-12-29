import CreateRoom from "../Components/CreateRoom"
import type { FC } from "react";

const Home: FC = () => {
    return (
        <div className="h-[100vh] flex items-center justify-center">
            <CreateRoom />
        </div>
    )
}

export default Home;