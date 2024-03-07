import './App.css';
import illustration from './assets/images/illustration-article.svg';
import avatar from './assets/images/image-avatar.webp';
function App() {
  return (
    <section className="section">
      <div className="IMG">
        <img src={illustration} alt='illustration' className="img"/>
      </div>
      <div className="divlearning">
        <p className="learning">Learning</p>
      </div>
      <div>
        <p>Publishing 21 Dec 2023</p>
      </div>
      <div>
        <h1 className="title">HTML & CSS foundation</h1>
      </div>
      <div>
        <p className="paragraph">These Languages are the backbone of every<br></br> website, defining structire, content, and<br></br> presentation</p>
      </div>
      <div className="author">
        <img src={avatar}></img><p>Greg Hooper</p>
      </div>
    </section>
  );
}

export default App;