import './App.css';
import Header from './Component/Header';
import TrainingSection from './Component/TrainingSection';
import TrainingCards from './Component/TrainingCards';
import TopCourses from './Component/TopCourses';
import CategoriesComponent from './Component/CategoriesComponent';
import EnrollComponent from './Component/EnrollComponent';
import MembershipComponent from './Component/MembershipComponent';
import KnowledgeComponent from './Component/KnowledgeComponent';
import ClientComponent from './Component/ClientComponent';
import EnrollActionComponent from './Component/EnrollActionComponent';
import FooterLinksComponent from './Component/FooterLinksComponent';
function App() {
  return (
    <div className="App">
      <div class="wrapper">
       <Header/>
       <TrainingSection/>
       <TrainingCards/>
       </div> 
       <TopCourses />
       <CategoriesComponent/>
       <EnrollComponent/>
       <MembershipComponent/>
       <KnowledgeComponent/>
       <ClientComponent/>
       <EnrollActionComponent/>
       <FooterLinksComponent/>
    </div>
  );
}

export default App;
