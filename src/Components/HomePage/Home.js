import React from "react";
import UserForm from "../UserForm/UserForm";
import '../HomePage/Home.css';
import Slider from "../Sliders/Slider";

function Home() {
  return (
    <div>
      <Slider />
      <div className="main_info container">
        <div>
          <h2>Design. Manufacture. Deliver</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo,
            deserunt incidunt fugiat tenetur, natus nesciunt obcaecati harum
            laudantium sit distinctio, ipsam placeat neque. Eius itaque, vel quo
            laboriosam id reprehenderit libero atque ullam fuga, quisquam
            aliquam dolore excepturi? In doloribus eaque, vel ex facere expedita
            modi iust dolores iste cum ut, officiis ad ducimus eligendi, nihil
            maiores! Minus similique earum id deleniti praesentium dolores illo,
            autem quo incidunt nesciunt excepturi ab voluptates accusantium
            alias beatae expedita quibusdam consectetur quasi? Ab illo, in
            deleniti, laboriosam quae itaque facere temporibus necessitatibus
            iste aspernatur quis, voluptates officia! Recusandae molestiae
            quidem atque distinctio iste. Fugit eius sapientin quaerat ex quod
            error amet libero omnis incidunt, tempore consequatur quidem magni
            alias aut non, deserunt aspernatur animi? Deserunt, culpa tempore?
            Temporibus ipsum laborum aut dolor cupiditate modi nisi magnam
            suscipit animi expedita, accusamus consequuntur neque quas fuga
            nostrum amet provident minus harum corrupti ex at eos exercitationem
            eligendi? Beatae, unde? Harum, ut omnis laudantium ipsam tenetur
            voluptas, ipsa cum, hic obcaecati odio inventore dolore totam
            similique eos esse exercitationem ipsum adipisci qui suscipit
            aliquid. Expedita vero, veritatis mollitia repellendus voluptatibus
            dicta enim deleniti iste officiis alias sed laborum et iusto
            placeat, pariatur minima. Dignissimos officiis dolorem obcaecati a,
            magni consequatur accusantium harum odio! Magni mollitia adipisci
            eos eligendi cupiditate.
          </p>
        </div>
        <UserForm />
      </div>
    </div>
  );
}

export default Home;
