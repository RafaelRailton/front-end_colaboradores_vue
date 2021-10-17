<template>
    <v-container id="body">
  <v-card color="basil">
      <div class="foto">
      <img src="https://avatars.githubusercontent.com/u/54728374?v=4" alt="rafael" id="foto">
      </div>
        <h1 id="nome">Rafael Railton Reis de Almeida</h1>
    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card
          color="basil"
          flat
        >
          <v-card-text > <p id="descricao">{{ text[tab] }}</p></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        tab: null,
        items: [
          '2017', '2018', '2019', '2020','2021',
        ],
        text: ['Um ano muito marcante, entrei para Faculdade de Engenharia de software pela Centro Universitário Fucapi, jovem e cheio de sonhos!',
        'Este ano serviu de muita aprendizagem, consegui meu primeiro trabalho como operador de telemarketing para uma agência de crédito, embora não fosse da minha aréa de estudos serviu para custear a faculdade. Neste mesmo ano tive a oportunidade de fazer um curso de programador web pelo ifam e depois de muita dedicação obtive a primeira oportunidade de estágio na aréa de TI pela Fundação de Vigilância em Saúde - FVS onde pude me desenvolver ainda mais como profissional e pessoa.',
        'Um ano de muito amadurecimento pessoal e profissional, começei a me dedicar mais a aréa de programação e logo começei fazer trabalhos freelances na web, um ano de muita superação também após a perda repentina de meu pai me vi como irmão mais velho tendo a responsabilidade de cuidar da minha família.',
        'Começo o ano dando continuidade aos trabalhos freelances e ao estágio. Tive a oportunidade de auxiliar na contrução da plataforma de estudos EAD pela fundação de vigilância em saúde utilizando a tecnológia moodle. Fechei o ano entrando para o time Tutiplast como desenvolvedor de software full-stack atuando como inovação e melhoria de processos industriais.',
        'O ano começa a todo vapor, estive a frente na construção do TutiAcademy uma plataforma de capacitação na modalidade remota, onde através deste software atingimos mais de 2 mil colaborares de forma direta, tendo a pespectiva de grande expansão, também estive na construção de diversos softwares voltados para melhoria de processos industriais no ramo de injeção plástica, recursos humanos e etc. Em meio a minha jornada tive o privilégio de trabalhar com as principais tecnologias do mercado como Php, ajax, javascript, Bootstrap, Bulma, Laravel, Node.js, vue.js, vuetify, react.js e etc.'],
      }
    },
  }
</script>

<style>
/* Helper classes */
.basil {
  background-color: #fff !important;
}
.basil--text {
  color: #356859 !important;
}
#foto{
    border-radius: 50%;
    width: 200px;
    height: 200px;
    margin-top: 35px;
    margin-bottom: 20px;
}
.foto{
    text-align: center;
}
#nome{
    font-size: 16pt;
    color:#356859;
    text-align: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; 
}
#body{
    margin-top:5%;
}
#descricao{
  text-align: justify;
  text-justify: inter-word;
}
</style>