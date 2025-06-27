import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>홈</h1>
            <ul>
                <li><Link to="/file-test">파일 생성 테스트</Link></li>
                <li><Link to="/grid-test">그리드 테스트</Link></li>
                <li><Link to="/chart-test">차트 테스트</Link></li>
            </ul>
        </div>
    );
}

export default Home;
