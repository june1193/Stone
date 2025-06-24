import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>홈</h1>
            <Link to="/Pagetwo">Page2로 이동</Link>
        </div>
    );
}

export default Home;
