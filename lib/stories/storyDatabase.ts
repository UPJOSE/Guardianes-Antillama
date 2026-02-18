import { Story } from '../types';

export const STORY_DATABASE: Story[] = [
  // ── HISTORIA 1 ── Olla de agua caliente (4 decisiones)
  {
    id: 'HIST_01',
    title: 'La olla de agua caliente',
    characterName: 'Mateo',
    characterAge: 10,
    category: 'agua_caliente',
    introduction: 'Hola, soy Mateo y tengo 10 años. Vivo con mi mamá y mi hermana pequeña Sofía en Lima. Hoy les voy a contar algo que me pasó un día en la cocina.',
    context: 'Era la hora del almuerzo y mi mamá estaba cocinando sopa. Yo tenía mucha hambre y quería ver qué estaba preparando. Mi hermanita Sofía estaba jugando con sus muñecas en el piso de la cocina.',
    riskAppearance: 'Vi una olla grande con agua hirviendo muy cerca del borde de la mesa. El mango de la olla estaba hacia afuera, justo donde Sofía podría alcanzarlo si se paraba. Salía mucho vapor.',
    decisionPoints: [
      {
        id: 'DP_01_01',
        question: '¿Qué debería hacer Mateo al ver la olla tan cerca del borde?',
        context: 'La olla está muy cerca del borde y el agua está hirviendo. Mateo puede ver el vapor saliendo. Su hermanita juega cerca.',
        options: [
          {
            id: 'OPT_01_01_A',
            text: 'Alejarme de la cocina y avisarle a mamá que la olla está peligrosa',
            type: 'SEGURA',
            riskLevel: 'bajo',
            feedback: '¡Excelente decisión! Alejarte y avisar a un adulto es lo más seguro. Nunca debemos tocar ollas con líquidos calientes.'
          },
          {
            id: 'OPT_01_01_B',
            text: 'Intentar empujar la olla hacia adentro de la mesa con cuidado',
            type: 'MUY_RIESGOSA',
            riskLevel: 'alto',
            feedback: 'Esta decisión es muy peligrosa. Aunque quieras ayudar, nunca debes tocar ollas con agua caliente. Podrías quemarte gravemente. Siempre pide ayuda a un adulto.'
          },
          {
            id: 'OPT_01_01_C',
            text: 'Quedarme cerca para vigilar que no se caiga',
            type: 'RIESGOSA',
            riskLevel: 'medio',
            feedback: 'Vigilar está bien, pero quedarte muy cerca es riesgoso. Es mejor alejarte y avisar a un adulto inmediatamente para que ellos solucionen el problema.'
          }
        ]
      },
      {
        id: 'DP_01_02',
        question: 'Mamá está ocupada hablando por teléfono y no te escuchó. ¿Qué haces ahora?',
        context: 'La olla sigue en el mismo lugar peligroso. Tu hermana pequeña se está acercando gateando.',
        options: [
          {
            id: 'OPT_01_02_A',
            text: 'Hablarle más fuerte a mamá o tocarle el hombro para que me preste atención',
            type: 'SEGURA',
            riskLevel: 'bajo',
            feedback: '¡Muy bien! Insistir con calma hasta que el adulto te escuche es importante. Tu persistencia puede prevenir un accidente.'
          },
          {
            id: 'OPT_01_02_B',
            text: 'Intentar mover la olla yo mismo porque es urgente',
            type: 'MUY_RIESGOSA',
            riskLevel: 'alto',
            feedback: 'No, nunca debes hacer esto. Aunque sea urgente, mover una olla con agua hirviendo es extremadamente peligroso. Sigue intentando llamar la atención del adulto.'
          },
          {
            id: 'OPT_01_02_C',
            text: 'Alejar a mi hermana de la cocina y seguir avisando a mamá',
            type: 'SEGURA',
            riskLevel: 'bajo',
            feedback: '¡Excelente! Proteger a tu hermana y seguir avisando muestra que entiendes muy bien cómo cuidarte y cuidar a otros.'
          }
        ]
      },
      {
        id: 'DP_01_03',
        question: 'Mamá ya movió la olla. Pero ahora te pide que lleves los platos a la mesa que está al lado de la cocina encendida. ¿Qué haces?',
        context: 'La cocina todavía está encendida con otra olla. Tienes que pasar cerca de la llama para llegar a la mesa.',
        options: [
          {
            id: 'OPT_01_03_A',
            text: 'Le digo a mamá que prefiero esperar a que apague la cocina antes de pasar',
            type: 'SEGURA',
            riskLevel: 'bajo',
            feedback: '¡Muy inteligente! Decirle a un adulto que algo te parece peligroso es una forma de cuidarte. No tienes que hacer todo lo que te piden si ves un riesgo.'
          },
          {
            id: 'OPT_01_03_B',
            text: 'Paso rápido con los platos intentando no acercarme mucho a la cocina',
            type: 'RIESGOSA',
            riskLevel: 'medio',
            feedback: 'Pasar rápido cerca de una cocina encendida con las manos ocupadas es riesgoso. Podrías tropezar o acercarte demasiado a la llama. Es mejor esperar.'
          },
          {
            id: 'OPT_01_03_C',
            text: 'Llevo los platos por otro camino más largo pero más seguro',
            type: 'SEGURA',
            riskLevel: 'bajo',
            feedback: '¡Buena idea! Buscar un camino seguro aunque sea más largo demuestra que piensas antes de actuar. Eso es ser un verdadero guardián.'
          }
        ]
      },
      {
        id: 'DP_01_04',
        question: 'Después de almorzar, tu mamá te pregunta: "¿Qué aprendimos hoy?" ¿Qué le respondes?',
        context: 'Es un momento para reflexionar sobre todo lo que pasó durante el almuerzo.',
        options: [
          {
            id: 'OPT_01_04_A',
            text: 'Que las ollas calientes deben estar lejos del borde y que siempre debo avisar a un adulto',
            type: 'SEGURA',
            riskLevel: 'bajo',
            feedback: '¡Perfecto! Aprendiste la lección más importante: identificar el peligro y pedir ayuda. Eres un verdadero guardián.'
          },
          {
            id: 'OPT_01_04_B',
            text: 'Que la próxima vez yo puedo mover las ollas si tengo cuidado',
            type: 'MUY_RIESGOSA',
            riskLevel: 'alto',
            feedback: 'No, esa no es la lección. Los niños nunca deben mover ollas con líquidos calientes. Siempre pide ayuda a un adulto, sin importar qué tan cuidadoso seas.'
          },
          {
            id: 'OPT_01_04_C',
            text: 'Que no debo entrar a la cocina nunca',
            type: 'RIESGOSA',
            riskLevel: 'medio',
            feedback: 'No se trata de nunca entrar a la cocina, sino de saber identificar peligros y pedir ayuda. Puedes estar en la cocina con supervisión de un adulto.'
          }
        ]
      }
    ]
  },

  // ── HISTORIA 2 ── Termo de agua caliente (3 decisiones)
  {
    id: 'HIST_02',
    title: 'El termo de agua caliente',
    characterName: 'Lucía',
    characterAge: 11,
    category: 'agua_caliente',
    introduction: 'Me llamo Lucía, tengo 11 años y me encanta ayudar en casa. Vivo en Cusco con mis papás y mi perrito Canela. Les cuento lo que me pasó un domingo.',
    context: 'Era domingo por la mañana y quería prepararme un té con galletas. Mi papá había dejado el termo lleno de agua caliente en la mesa del comedor antes de salir al jardín.',
    riskAppearance: 'El termo era grande, pesado y estaba muy caliente al tocarlo. Nunca lo había usado sola antes, pero pensé que podría hacerlo porque ya soy grande.',
    decisionPoints: [
      {
        id: 'DP_02_01',
        question: '¿Qué debería hacer Lucía con el termo?',
        context: 'El termo está lleno de agua muy caliente. Lucía quiere servirse té pero nunca ha usado el termo sola.',
        options: [
          {
            id: 'OPT_02_01_A',
            text: 'Pedirle a papá que me ayude a servir el agua caliente',
            type: 'SEGURA',
            riskLevel: 'bajo',
            feedback: '¡Perfecto! Pedir ayuda a un adulto cuando no estás segura es siempre la mejor decisión. No hay nada malo en pedir ayuda.'
          },
          {
            id: 'OPT_02_01_B',
            text: 'Intentar servir el agua yo sola con mucho cuidado',
            type: 'RIESGOSA',
            riskLevel: 'medio',
            feedback: 'Esto es riesgoso. Los termos pueden ser pesados y difíciles de manejar. El agua muy caliente puede salpicar. Es mejor pedir ayuda.'
          },
          {
            id: 'OPT_02_01_C',
            text: 'Esperar a que el agua se enfríe un poco y luego intentarlo',
            type: 'RIESGOSA',
            riskLevel: 'medio',
            feedback: 'Aunque esperar es buena idea, el agua del termo se mantiene caliente por mucho tiempo. Es mejor pedir ayuda a un adulto.'
          }
        ]
      },
      {
        id: 'DP_02_02',
        question: 'Tu papá te dice que puedes intentarlo pero que él te va a supervisar. ¿Cómo lo haces?',
        context: 'Ahora tienes permiso y supervisión. Debes decidir cómo servir el agua de forma segura.',
        options: [
          {
            id: 'OPT_02_02_A',
            text: 'Poner la taza en la mesa, sostener el termo con las dos manos y servir despacio',
            type: 'SEGURA',
            riskLevel: 'bajo',
            feedback: '¡Excelente técnica! Usar las dos manos, ir despacio y tener la taza en una superficie estable es la forma más segura.'
          },
          {
            id: 'OPT_02_02_B',
            text: 'Sostener la taza en una mano y el termo en la otra',
            type: 'MUY_RIESGOSA',
            riskLevel: 'alto',
            feedback: 'Esto es muy peligroso. Sostener ambas cosas aumenta mucho el riesgo de que se te caiga algo. Siempre pon la taza en la mesa primero.'
          },
          {
            id: 'OPT_02_02_C',
            text: 'Pedirle a papá que lo haga él mientras yo observo y aprendo',
            type: 'SEGURA',
            riskLevel: 'bajo',
            feedback: '¡Muy sabio! Observar primero cómo lo hace un adulto es una excelente forma de aprender de manera segura.'
          }
        ]
      },
      {
        id: 'DP_02_03',
        question: 'Mientras tomas tu té, tu hermanito de 5 años entra corriendo y quiere agarrar el termo. ¿Qué haces?',
        context: 'El termo todavía tiene agua caliente y tu hermanito no sabe que es peligroso.',
        options: [
          {
            id: 'OPT_02_03_A',
            text: 'Le digo con calma que no lo toque porque está caliente y llamo a papá',
            type: 'SEGURA',
            riskLevel: 'bajo',
            feedback: '¡Excelente! Advertir a tu hermanito con calma y llamar a un adulto es la mejor combinación. Estás protegiendo a tu familia.'
          },
          {
            id: 'OPT_02_03_B',
            text: 'Le quito el termo de las manos rápidamente',
            type: 'RIESGOSA',
            riskLevel: 'alto',
            feedback: 'Quitar el termo rápido podría hacer que se derrame el agua caliente sobre alguno de los dos. Es mejor hablarle primero y pedir ayuda.'
          },
          {
            id: 'OPT_02_03_C',
            text: 'No hago nada porque papá está cerca y él se dará cuenta',
            type: 'RIESGOSA',
            riskLevel: 'medio',
            feedback: 'Esperar a que otro se dé cuenta puede ser tarde. Si ves un peligro, actúa: avisa, alerta, pide ayuda. No esperes.'
          }
        ]
      }
    ]
  },

  // ── HISTORIA 3 ── La cocina encendida (4 decisiones)
  {
    id: 'HIST_03',
    title: 'La cocina encendida',
    characterName: 'Diego',
    characterAge: 9,
    category: 'cocina',
    introduction: 'Soy Diego, tengo 9 años y vivo en Arequipa con mi abuela Rosita. Ella cocina las cosas más ricas del mundo. Les cuento lo que pasó un día que ella tuvo que salir.',
    context: 'Mi abuela estaba cocinando arroz con pollo y tuvo que salir un momento a atender a un vecino que tocó la puerta. Me dijo: "Diegito, ya vengo, no toques nada".',
    riskAppearance: 'La cocina estaba encendida con una olla grande encima. Después de unos minutos, vi que empezaba a salir mucho vapor, la olla hacía ruido fuerte y olía a quemado. Mi abuela no regresaba.',
    decisionPoints: [
      {
        id: 'DP_03_01',
        question: '¿Qué debería hacer Diego al ver que la olla hace ruido y huele a quemado?',
        context: 'La cocina está encendida, la olla hace ruido fuerte, sale mucho vapor y huele a quemado. Diego está solo.',
        options: [
          {
            id: 'OPT_03_01_A',
            text: 'Ir a buscar a mi abuela inmediatamente para que ella vea qué pasa',
            type: 'SEGURA',
            riskLevel: 'bajo',
            feedback: '¡Correcto! Nunca debes manipular la cocina tú solo. Buscar al adulto responsable es lo más seguro.'
          },
          {
            id: 'OPT_03_01_B',
            text: 'Apagar la cocina yo mismo porque sé dónde está la perilla',
            type: 'RIESGOSA',
            riskLevel: 'medio',
            feedback: 'Aunque sepas dónde está la perilla, es mejor no manipular la cocina sin un adulto presente. Podrías quemarte o causar otro problema. Busca a tu abuela.'
          },
          {
            id: 'OPT_03_01_C',
            text: 'Quedarme vigilando hasta que regrese mi abuela',
            type: 'RIESGOSA',
            riskLevel: 'medio',
            feedback: 'Vigilar está bien, pero si ves que algo no está normal, es mejor ir a buscar al adulto de inmediato. No esperes a que empeore.'
          }
        ]
      },
      {
        id: 'DP_03_02',
        question: 'Encontraste a tu abuela y ella apagó la cocina justo a tiempo. Ahora ella quiere enseñarte algo. ¿Qué haces?',
        context: 'Tu abuela quiere mostrarte cómo funciona la cocina para que aprendas a identificar peligros.',
        options: [
          {
            id: 'OPT_03_02_A',
            text: 'Escucho con atención mientras ella me explica, sin tocar nada',
            type: 'SEGURA',
            riskLevel: 'bajo',
            feedback: '¡Excelente! Aprender con supervisión es la mejor forma. Escuchar y observar te prepara para el futuro.'
          },
          {
            id: 'OPT_03_02_B',
            text: 'Le digo que ya sé cómo funciona y no necesito que me enseñe',
            type: 'RIESGOSA',
            riskLevel: 'medio',
            feedback: 'Siempre podemos aprender algo nuevo, especialmente sobre seguridad. Escuchar a los adultos con experiencia nos protege.'
          },
          {
            id: 'OPT_03_02_C',
            text: 'Intento encender la cocina yo para mostrarle que puedo hacerlo',
            type: 'MUY_RIESGOSA',
            riskLevel: 'alto',
            feedback: 'Nunca enciendas la cocina sin permiso y supervisión directa de un adulto. Observar primero es mucho más seguro.'
          }
        ]
      },
      {
        id: 'DP_03_03',
        question: 'Al día siguiente, tu amigo Carlitos te dice que él sí sabe cocinar solo. Te invita a su casa a intentarlo. ¿Qué le dices?',
        context: 'Tu amigo quiere que cocinen solos sin ningún adulto presente.',
        options: [
          {
            id: 'OPT_03_03_A',
            text: 'Le digo que no es seguro cocinar sin un adulto y que mejor juguemos otra cosa',
            type: 'SEGURA',
            riskLevel: 'bajo',
            feedback: '¡Muy valiente! Decir que no cuando algo es peligroso, aunque tu amigo insista, es ser un verdadero guardián.'
          },
          {
            id: 'OPT_03_03_B',
            text: 'Voy con él pero solo miro, no toco nada',
            type: 'RIESGOSA',
            riskLevel: 'medio',
            feedback: 'Aunque no toques nada, estar presente mientras otro niño usa la cocina sin supervisión es riesgoso. Podrían lastimarse los dos.'
          },
          {
            id: 'OPT_03_03_C',
            text: 'Voy y lo intento porque mi amigo dice que es fácil',
            type: 'MUY_RIESGOSA',
            riskLevel: 'alto',
            feedback: 'Que alguien diga que es fácil no significa que sea seguro. Cocinar sin un adulto es muy peligroso para cualquier niño.'
          }
        ]
      },
      {
        id: 'DP_03_04',
        question: '¿Qué aprendiste de toda esta experiencia?',
        context: 'Es momento de reflexionar sobre todo lo que viviste.',
        options: [
          {
            id: 'OPT_03_04_A',
            text: 'Que siempre debo avisar a un adulto si veo algo peligroso, y que está bien decir no a mis amigos',
            type: 'SEGURA',
            riskLevel: 'bajo',
            feedback: '¡Exacto! Has comprendido perfectamente. Avisar, pedir ayuda y saber decir no son las mejores herramientas de un guardián.'
          },
          {
            id: 'OPT_03_04_B',
            text: 'Que la próxima vez puedo apagar la cocina yo solo para ayudar más rápido',
            type: 'MUY_RIESGOSA',
            riskLevel: 'alto',
            feedback: 'No, esa no es la lección correcta. Nunca debes manipular la cocina sin supervisión de un adulto, sin importar qué tan urgente parezca.'
          },
          {
            id: 'OPT_03_04_C',
            text: 'Que debo aprender con mi abuela cómo usar la cocina de forma segura cuando sea más grande',
            type: 'SEGURA',
            riskLevel: 'bajo',
            feedback: '¡Muy bien! Querer aprender de forma segura con supervisión es una actitud excelente. Así podrás ayudar cuando seas mayor.'
          }
        ]
      }
    ]
  },

  // ── HISTORIA 4 ── Cables y electricidad (3 decisiones)
  {
    id: 'HIST_04',
    title: 'Los cables peligrosos',
    characterName: 'Valentina',
    characterAge: 10,
    category: 'electricidad',
    introduction: 'Hola, me llamo Valentina y tengo 10 años. Vivo en Trujillo con mi mamá y mi tío Carlos. Les quiero contar algo que me pasó cuando estaba haciendo mi tarea.',
    context: 'Estaba en la sala haciendo mi tarea del colegio. Necesitaba enchufar la tablet para cargarla porque se estaba quedando sin batería. Vi un enchufe múltiple en el piso con muchos cables conectados.',
    riskAppearance: 'El enchufe múltiple tenía conectados: la televisión, un ventilador, la plancha (que estaba encendida), el cargador del celular y una lámpara. Los cables estaban todos enredados y el enchufe se sentía caliente al tocarlo.',
    decisionPoints: [
      {
        id: 'DP_04_01',
        question: 'Valentina necesita cargar su tablet. El enchufe múltiple ya tiene muchas cosas conectadas y se siente caliente. ¿Qué hace?',
        context: 'El enchufe múltiple está sobrecargado con 5 aparatos. Se siente caliente. Valentina quiere conectar uno más.',
        options: [
          {
            id: 'OPT_04_01_A',
            text: 'No conecto nada más y le aviso a mi tío que el enchufe está muy caliente',
            type: 'SEGURA',
            riskLevel: 'bajo',
            feedback: '¡Excelente! Un enchufe caliente es señal de peligro. Conectar más cosas podría causar un cortocircuito o un incendio. Avisaste bien.'
          },
          {
            id: 'OPT_04_01_B',
            text: 'Desconecto algo que no se esté usando para hacer espacio y conecto mi tablet',
            type: 'RIESGOSA',
            riskLevel: 'medio',
            feedback: 'Manipular cables y enchufes sin supervisión de un adulto es riesgoso, especialmente si el enchufe ya está caliente. Mejor pide ayuda.'
          },
          {
            id: 'OPT_04_01_C',
            text: 'Conecto mi tablet de todas formas porque solo es un aparato más',
            type: 'MUY_RIESGOSA',
            riskLevel: 'alto',
            feedback: 'Esto es muy peligroso. Un enchufe sobrecargado puede causar un cortocircuito, chispas o incluso un incendio. Nunca agregues más aparatos a un enchufe caliente.'
          }
        ]
      },
      {
        id: 'DP_04_02',
        question: 'Tu tío Carlos desconectó algunos aparatos. Ahora te pregunta si sabes por qué el enchufe estaba caliente. ¿Qué le dices?',
        context: 'Tu tío quiere saber si entiendes el peligro de sobrecargar enchufes.',
        options: [
          {
            id: 'OPT_04_02_A',
            text: 'Porque tenía demasiadas cosas conectadas y eso puede causar un incendio',
            type: 'SEGURA',
            riskLevel: 'bajo',
            feedback: '¡Exacto! Sobrecargar enchufes es una de las causas más comunes de incendios en el hogar. Reconocer eso te hace más segura.'
          },
          {
            id: 'OPT_04_02_B',
            text: 'No sé, pero me di cuenta de que estaba caliente',
            type: 'RIESGOSA',
            riskLevel: 'medio',
            feedback: 'Está bien que notaste el calor, eso es importante. Pero es bueno aprender por qué pasa: demasiados aparatos en un solo enchufe lo sobrecargan.'
          },
          {
            id: 'OPT_04_02_C',
            text: 'Creo que es normal que los enchufes se calienten',
            type: 'MUY_RIESGOSA',
            riskLevel: 'alto',
            feedback: 'No, un enchufe caliente NO es normal. Es una señal de peligro que puede indicar sobrecarga o un problema eléctrico. Siempre avisa a un adulto.'
          }
        ]
      },
      {
        id: 'DP_04_03',
        question: 'Unos días después, ves que en la casa de tu amiga también tienen un enchufe con muchos cables. ¿Qué haces?',
        context: 'Estás en casa de tu amiga y notas la misma situación peligrosa que viviste.',
        options: [
          {
            id: 'OPT_04_03_A',
            text: 'Le cuento a mi amiga lo que aprendí y le sugiero que le diga a sus papás',
            type: 'SEGURA',
            riskLevel: 'bajo',
            feedback: '¡Increíble! Compartir lo que aprendiste con otros es lo que hace un verdadero guardián. Puedes ayudar a proteger a más familias.'
          },
          {
            id: 'OPT_04_03_B',
            text: 'No digo nada porque no es mi casa',
            type: 'RIESGOSA',
            riskLevel: 'medio',
            feedback: 'Aunque no sea tu casa, si ves un peligro puedes mencionarlo con respeto. Compartir lo que sabes puede evitar un accidente.'
          },
          {
            id: 'OPT_04_03_C',
            text: 'Desconecto algunos cables yo misma para ayudar',
            type: 'RIESGOSA',
            riskLevel: 'medio',
            feedback: 'Tu intención es buena, pero manipular cables en una casa ajena sin permiso de un adulto no es lo correcto. Mejor avisa a los papás de tu amiga.'
          }
        ]
      }
    ]
  },

  // ── HISTORIA 5 ── Velas y fuego pequeño (4 decisiones)
  {
    id: 'HIST_05',
    title: 'La vela en la fiesta',
    characterName: 'Camila',
    characterAge: 11,
    category: 'fuego_pequeno',
    introduction: 'Hola, soy Camila y tengo 11 años. Vivo en Piura con mi familia. Les voy a contar lo que pasó en la fiesta de cumpleaños de mi primo Sebastián.',
    context: 'Era el cumpleaños de mi primo y toda la familia estaba reunida. Mi tía había decorado la mesa con un mantel de plástico, globos y muchas serpentinas de papel. Todo se veía muy bonito.',
    riskAppearance: 'Mi tía puso velas decorativas encendidas en la mesa, muy cerca de las serpentinas de papel y los globos. También había una vela grande en el centro de la torta. Las serpentinas casi tocaban la llama de una vela.',
    decisionPoints: [
      {
        id: 'DP_05_01',
        question: 'Camila nota que las serpentinas de papel están muy cerca de las velas encendidas. ¿Qué hace?',
        context: 'Las serpentinas de papel están a centímetros de la llama. El papel se puede encender muy fácilmente.',
        options: [
          {
            id: 'OPT_05_01_A',
            text: 'Le digo a mi tía que las serpentinas están muy cerca de las velas y podrían prenderse',
            type: 'SEGURA',
            riskLevel: 'bajo',
            feedback: '¡Muy bien! El papel se enciende muy fácilmente con una llama. Avisar al adulto es la mejor decisión para evitar un incendio.'
          },
          {
            id: 'OPT_05_01_B',
            text: 'Muevo las serpentinas yo misma alejándolas de las velas',
            type: 'RIESGOSA',
            riskLevel: 'medio',
            feedback: 'Tu intención es buena, pero mover cosas cerca de velas encendidas es riesgoso. Podrías acercar las serpentinas a la llama sin querer. Mejor avisa a un adulto.'
          },
          {
            id: 'OPT_05_01_C',
            text: 'No digo nada porque es la fiesta de mi primo y no quiero molestar',
            type: 'MUY_RIESGOSA',
            riskLevel: 'alto',
            feedback: 'Nunca te quedes callada si ves un peligro, aunque sea una fiesta. Avisar puede evitar un accidente grave. Tu seguridad es más importante que no molestar.'
          }
        ]
      },
      {
        id: 'DP_05_02',
        question: 'Tu tía movió las serpentinas. Ahora es hora de soplar las velas de la torta. Tu primo quiere que todos los niños se acerquen. ¿Qué haces?',
        context: 'Hay 12 velas encendidas en la torta. Muchos niños quieren acercarse al mismo tiempo.',
        options: [
          {
            id: 'OPT_05_02_A',
            text: 'Me acerco con cuidado, manteniendo mi pelo y ropa lejos de las velas',
            type: 'SEGURA',
            riskLevel: 'bajo',
            feedback: '¡Bien pensado! Acercarse con cuidado y mantener el pelo y la ropa lejos del fuego es muy importante. El pelo y la ropa se pueden encender rápido.'
          },
          {
            id: 'OPT_05_02_B',
            text: 'Me inclino sobre la torta para ayudar a soplar las velas',
            type: 'RIESGOSA',
            riskLevel: 'medio',
            feedback: 'Inclinarse sobre velas encendidas es peligroso. Tu pelo o ropa podrían acercarse demasiado a la llama. Mantén siempre distancia.'
          },
          {
            id: 'OPT_05_02_C',
            text: 'Agarro una vela encendida para verla de cerca porque me parece bonita',
            type: 'MUY_RIESGOSA',
            riskLevel: 'alto',
            feedback: 'Nunca agarres una vela encendida. La cera caliente puede quemarte las manos y la llama puede prender tu ropa. Las velas se ven bonitas pero son peligrosas.'
          }
        ]
      },
      {
        id: 'DP_05_03',
        question: 'Después de la torta, unos primos mayores quieren jugar con fósforos afuera. Te invitan. ¿Qué haces?',
        context: 'Tus primos de 13 y 14 años encontraron una caja de fósforos y quieren encenderlos por diversión en el jardín.',
        options: [
          {
            id: 'OPT_05_03_A',
            text: 'Les digo que no es seguro y voy a avisarle a un adulto',
            type: 'SEGURA',
            riskLevel: 'bajo',
            feedback: '¡Excelente decisión! Jugar con fósforos nunca es seguro, sin importar la edad. Avisar a un adulto es lo correcto.'
          },
          {
            id: 'OPT_05_03_B',
            text: 'Voy con ellos pero no toco los fósforos, solo miro',
            type: 'RIESGOSA',
            riskLevel: 'medio',
            feedback: 'Aunque no toques los fósforos, estar cerca de niños jugando con fuego es peligroso. El fuego puede salirse de control rápidamente.'
          },
          {
            id: 'OPT_05_03_C',
            text: 'Juego con ellos porque son mayores y saben lo que hacen',
            type: 'MUY_RIESGOSA',
            riskLevel: 'alto',
            feedback: 'Que sean mayores no significa que sea seguro. Jugar con fósforos es peligroso a cualquier edad. El fuego no es un juguete.'
          }
        ]
      },
      {
        id: 'DP_05_04',
        question: 'De regreso a casa, tu mamá te pregunta cómo estuvo la fiesta. ¿Qué le cuentas?',
        context: 'Es un buen momento para compartir lo que observaste y aprendiste.',
        options: [
          {
            id: 'OPT_05_04_A',
            text: 'Le cuento todo: las serpentinas cerca de las velas, y que mis primos querían jugar con fósforos',
            type: 'SEGURA',
            riskLevel: 'bajo',
            feedback: '¡Perfecto! Contarle a un adulto de confianza lo que viste es muy importante. Así los adultos pueden tomar medidas para que no vuelva a pasar.'
          },
          {
            id: 'OPT_05_04_B',
            text: 'Solo le cuento lo bonito de la fiesta, no quiero que se preocupe',
            type: 'RIESGOSA',
            riskLevel: 'medio',
            feedback: 'Es importante compartir tanto lo bueno como los peligros que viste. Los adultos necesitan saber para poder protegerte mejor.'
          },
          {
            id: 'OPT_05_04_C',
            text: 'Le cuento que mis primos jugaban con fósforos pero le pido que no diga nada',
            type: 'RIESGOSA',
            riskLevel: 'medio',
            feedback: 'Está bien que le cuentes, pero pedir que no diga nada no es lo mejor. Los adultos necesitan hablar entre ellos para mantener a todos seguros.'
          }
        ]
      }
    ]
  },

  // ── HISTORIA 6 ── Productos de limpieza peligrosos (3 decisiones)
  {
    id: 'HIST_06',
    title: 'Los productos de limpieza',
    characterName: 'Andrés',
    characterAge: 9,
    category: 'productos_quimicos',
    introduction: 'Hola, me llamo Andrés y tengo 9 años. Vivo en Iquitos con mi mamá y mi abuelita. Me gusta mucho ayudar en la casa, sobre todo los fines de semana. Hoy les cuento algo que me pasó un sábado mientras mi mamá limpiaba.',
    context: 'Era sábado de limpieza. Mi mamá estaba lavando el baño con varios productos. Había botellas de lejía, desinfectante y un líquido azul para los vidrios. Todo olía muy fuerte. Mi mamá salió un momento a contestar el teléfono y me dejó solo en el baño.',
    riskAppearance: 'Vi que había dos botellas abiertas en el piso: una de lejía y otra de un líquido amarillo que decía "ácido". Las dos estaban destapadas y el olor era tan fuerte que me picaban los ojos. También vi que había salpicaduras en el piso cerca de mis pies descalzos.',
    decisionPoints: [
      {
        id: 'DP_06_01',
        question: 'Andrés está solo en el baño con productos químicos abiertos que le pican los ojos. ¿Qué debería hacer?',
        context: 'Las botellas están destapadas, el olor es muy fuerte y hay salpicaduras en el piso. Andrés está descalzo.',
        options: [
          {
            id: 'OPT_06_01_A',
            text: 'Salir inmediatamente del baño y llamar a mamá para que venga',
            type: 'SEGURA',
            riskLevel: 'bajo',
            feedback: '¡Excelente! Cuando los productos químicos huelen muy fuerte o te pican los ojos, lo más seguro es alejarte de inmediato y llamar a un adulto. Los gases de estos productos pueden hacerte daño.'
          },
          {
            id: 'OPT_06_01_B',
            text: 'Intentar cerrar las botellas yo mismo para que no sigan oliendo',
            type: 'MUY_RIESGOSA',
            riskLevel: 'alto',
            feedback: '¡Muy peligroso! Tocar productos químicos sin guantes puede quemar tu piel. La lejía y los ácidos son sustancias que causan quemaduras químicas graves. Nunca los toques directamente.'
          },
          {
            id: 'OPT_06_01_C',
            text: 'Quedarme en el baño pero taparme la nariz con la camiseta',
            type: 'RIESGOSA',
            riskLevel: 'medio',
            feedback: 'Taparse la nariz no es suficiente. Los gases químicos pueden entrar por los ojos y la piel también. Lo correcto es salir del lugar inmediatamente.'
          }
        ]
      },
      {
        id: 'DP_06_02',
        question: 'Tu mamá regresó y cerró las botellas. Ahora te explica que nunca se deben mezclar productos de limpieza. Tu primo dice que él mezcla jabón con lejía para que limpie mejor. ¿Qué le dices?',
        context: 'Tu primo cree que mezclar productos de limpieza los hace más efectivos.',
        options: [
          {
            id: 'OPT_06_02_A',
            text: 'Le explico que mezclar productos puede crear gases tóxicos muy peligrosos',
            type: 'SEGURA',
            riskLevel: 'bajo',
            feedback: '¡Perfecto! Mezclar lejía con otros productos puede crear gases venenosos como el cloro, que pueden causar problemas graves para respirar. Compartir lo que sabes puede salvar vidas.'
          },
          {
            id: 'OPT_06_02_B',
            text: 'No le digo nada porque él es mayor y sabrá lo que hace',
            type: 'RIESGOSA',
            riskLevel: 'medio',
            feedback: 'Aunque sea mayor, puede estar equivocado. Muchos adultos no saben que mezclar productos de limpieza es peligroso. Compartir información de seguridad siempre es importante.'
          },
          {
            id: 'OPT_06_02_C',
            text: 'Le digo que probemos a mezclarlos afuera para ver qué pasa',
            type: 'MUY_RIESGOSA',
            riskLevel: 'alto',
            feedback: '¡Nunca experimentes con productos químicos! Incluso al aire libre, los gases tóxicos pueden hacerte mucho daño. Esto no es un juego.'
          }
        ]
      },
      {
        id: 'DP_06_03',
        question: 'Unos días después, encuentras una botella sin etiqueta debajo del lavadero. Tiene un líquido transparente que podría ser agua o podría ser un producto de limpieza. ¿Qué haces?',
        context: 'No puedes saber qué contiene la botella porque no tiene etiqueta. Parece agua pero podría ser algo peligroso.',
        options: [
          {
            id: 'OPT_06_03_A',
            text: 'No la toco y le aviso a mamá para que ella revise qué es',
            type: 'SEGURA',
            riskLevel: 'bajo',
            feedback: '¡Muy bien! Nunca toques, huelas ni pruebes un líquido desconocido. Muchos productos de limpieza son transparentes y parecen agua pero pueden causar quemaduras graves.'
          },
          {
            id: 'OPT_06_03_B',
            text: 'La huelo para intentar saber qué es',
            type: 'MUY_RIESGOSA',
            riskLevel: 'alto',
            feedback: '¡Nunca huelas un producto desconocido! Algunos químicos pueden dañar tus pulmones con solo inhalarlos. Siempre pide ayuda a un adulto.'
          },
          {
            id: 'OPT_06_03_C',
            text: 'La dejo donde está y me alejo, ya alguien la encontrará',
            type: 'RIESGOSA',
            riskLevel: 'medio',
            feedback: 'Alejarte es bueno, pero es mejor avisar a un adulto. Otro niño más pequeño podría encontrarla y tocarla o beberla pensando que es agua.'
          }
        ]
      }
    ]
  },

  // ── HISTORIA 7 ── Quemaduras por sol y superficies calientes (4 decisiones)
  {
    id: 'HIST_07',
    title: 'El día de playa abrasador',
    characterName: 'Isabella',
    characterAge: 10,
    category: 'sol_calor',
    introduction: 'Hola, soy Isabella y tengo 10 años. Vivo en Chiclayo con mi familia. El verano pasado fuimos a la playa de Pimentel y me pasó algo que nunca voy a olvidar. Les cuento para que aprendan de mi experiencia.',
    context: 'Era un domingo de mucho sol, hacía más de 30 grados. Llegamos a la playa temprano y todo se veía perfecto: el mar azul, la arena dorada, y muchos niños jugando. Mi papá puso la sombrilla y sacó el bloqueador solar.',
    riskAppearance: 'Después de un rato jugando, noté que la arena estaba tan caliente que quemaba los pies. Las piedras cerca del estacionamiento brillaban con el sol. Vi a mi hermanito caminando descalzo hacia el carro que había estado al sol por horas. La manija de la puerta del carro se veía que brillaba con el calor.',
    decisionPoints: [
      {
        id: 'DP_07_01',
        question: 'Isabella ve que su hermanito camina descalzo hacia el carro que está ardiendo bajo el sol. ¿Qué hace?',
        context: 'La arena quema, las piedras están calientes y el carro lleva horas al sol. La manija metálica puede causar quemaduras.',
        options: [
          {
            id: 'OPT_07_01_A',
            text: 'Le grito a mi hermanito que se detenga y le digo a papá que el carro está muy caliente',
            type: 'SEGURA',
            riskLevel: 'bajo',
            feedback: '¡Excelente reacción! Las superficies metálicas al sol pueden alcanzar temperaturas de más de 60 grados y causar quemaduras graves en segundos. Alertar a tu hermanito y a un adulto es lo correcto.'
          },
          {
            id: 'OPT_07_01_B',
            text: 'Corro a abrir la puerta del carro yo misma para que él pueda entrar',
            type: 'RIESGOSA',
            riskLevel: 'medio',
            feedback: 'Tu intención es buena, pero tocar la manija metálica de un carro al sol puede quemarte las manos. Es mejor avisar a un adulto que use una toalla o tela para abrirlo.'
          },
          {
            id: 'OPT_07_01_C',
            text: 'No hago nada porque él ya está grande y puede cuidarse solo',
            type: 'MUY_RIESGOSA',
            riskLevel: 'alto',
            feedback: 'Los niños pequeños no siempre reconocen el peligro del calor extremo. Si ves que alguien puede quemarse, siempre avisa. Un segundo de contacto con metal caliente puede causar una quemadura seria.'
          }
        ]
      },
      {
        id: 'DP_07_02',
        question: 'Tu papá dice que es hora de ponerse más bloqueador solar. Tú no quieres porque se siente pegajoso. ¿Qué haces?',
        context: 'Llevas más de una hora al sol. Tu piel ya se ve un poco roja en los hombros.',
        options: [
          {
            id: 'OPT_07_02_A',
            text: 'Me pongo el bloqueador aunque no me guste, porque sé que las quemaduras de sol son peligrosas',
            type: 'SEGURA',
            riskLevel: 'bajo',
            feedback: '¡Muy inteligente! Las quemaduras solares pueden ser muy dolorosas y dañan tu piel para siempre. El bloqueador te protege aunque se sienta pegajoso. Es un pequeño precio por tu salud.'
          },
          {
            id: 'OPT_07_02_B',
            text: 'Le digo que no quiero y sigo jugando al sol',
            type: 'MUY_RIESGOSA',
            riskLevel: 'alto',
            feedback: 'Las quemaduras solares pueden causar ampollas, fiebre y dolor intenso. La piel de los niños es más sensible que la de los adultos. Siempre usa protección solar.'
          },
          {
            id: 'OPT_07_02_C',
            text: 'Me meto al agua para refrescarme en vez de ponerme bloqueador',
            type: 'RIESGOSA',
            riskLevel: 'medio',
            feedback: 'El agua no te protege del sol. De hecho, los rayos del sol penetran el agua y puedes quemarte incluso estando mojada. El bloqueador es necesario antes y después de nadar.'
          }
        ]
      },
      {
        id: 'DP_07_03',
        question: 'Al mediodía, tu amiga quiere hacer un concurso de quién aguanta más tiempo parada en las piedras calientes. ¿Qué le dices?',
        context: 'Las piedras oscuras están ardiendo bajo el sol del mediodía. Algunos niños ya se quejaron de que queman.',
        options: [
          {
            id: 'OPT_07_03_A',
            text: 'Le digo que eso es peligroso y que mejor juguemos en la arena mojada con sandalias',
            type: 'SEGURA',
            riskLevel: 'bajo',
            feedback: '¡Perfecto! Las piedras calientes pueden causar quemaduras en las plantas de los pies en segundos. Proponer una alternativa segura y divertida es lo que hace un verdadero guardián.'
          },
          {
            id: 'OPT_07_03_B',
            text: 'Acepto el reto porque será solo un momento',
            type: 'MUY_RIESGOSA',
            riskLevel: 'alto',
            feedback: 'Las piedras al sol pueden superar los 65 grados. Incluso unos segundos pueden causar quemaduras graves en los pies. Nunca aceptes retos que pongan en peligro tu cuerpo.'
          },
          {
            id: 'OPT_07_03_C',
            text: 'Miro cómo lo hacen los demás pero yo no participo',
            type: 'RIESGOSA',
            riskLevel: 'medio',
            feedback: 'No participar es bueno, pero si ves que otros niños pueden lastimarse, lo mejor es avisar a un adulto. Cuidar a los demás también es importante.'
          }
        ]
      },
      {
        id: 'DP_07_04',
        question: 'De regreso a casa, tu piel está roja y te arde. ¿Qué haces?',
        context: 'A pesar de usar bloqueador, algunas partes de tu cuerpo se quemaron un poco con el sol.',
        options: [
          {
            id: 'OPT_07_04_A',
            text: 'Le digo a mamá que me arde la piel para que me ponga algo fresco y crema especial',
            type: 'SEGURA',
            riskLevel: 'bajo',
            feedback: '¡Correcto! Avisar a un adulto cuando tu piel está quemada por el sol es importante. Agua fresca (no helada) y crema hidratante ayudan. Si hay ampollas, necesitas ir al doctor.'
          },
          {
            id: 'OPT_07_04_B',
            text: 'Me pongo hielo directamente en la piel roja para que se me quite',
            type: 'RIESGOSA',
            riskLevel: 'medio',
            feedback: 'El hielo directo sobre piel quemada puede empeorar la lesión y causar quemaduras por frío. Usa agua fresca o compresas húmedas, nunca hielo directo.'
          },
          {
            id: 'OPT_07_04_C',
            text: 'No le digo a nadie y espero a que se me pase solo',
            type: 'RIESGOSA',
            riskLevel: 'medio',
            feedback: 'Las quemaduras solares necesitan atención. Si no las cuidas, pueden empeorar, causar ampollas o infecciones. Siempre avisa a un adulto.'
          }
        ]
      }
    ]
  },

  // ── HISTORIA 8 ── Pirotecnia y fuegos artificiales (4 decisiones)
  {
    id: 'HIST_08',
    title: 'Los fuegos artificiales de Año Nuevo',
    characterName: 'Sebastián',
    characterAge: 11,
    category: 'pirotecnia',
    introduction: 'Hola, soy Sebastián y tengo 11 años. Vivo en Huancayo con mi familia grande: mis papás, mis abuelos y mis tres primos. Les voy a contar lo que pasó la noche de Año Nuevo, una noche que empezó muy divertida pero se puso peligrosa.',
    context: 'Era 31 de diciembre y toda la familia estaba reunida en la casa de mis abuelos. Había música, comida rica y todos estaban felices. A las 11 de la noche, mi tío sacó una caja grande llena de fuegos artificiales, cohetes y bengalas para celebrar el Año Nuevo.',
    riskAppearance: 'Mi tío empezó a preparar los fuegos artificiales en el patio. Mis primos mayores de 14 y 15 años querían ayudar a encenderlos. Vi que había cohetes grandes, volcancitos, estrellitas y unas bengalas largas. Mi primo menor, Pablito de 7 años, estaba muy emocionado y quería agarrar una estrellita.',
    decisionPoints: [
      {
        id: 'DP_08_01',
        question: 'Pablito, tu primo de 7 años, quiere agarrar una estrellita encendida. ¿Qué hace Sebastián?',
        context: 'Las estrellitas alcanzan temperaturas de más de 1000 grados. Pablito extiende la mano para agarrar una.',
        options: [
          {
            id: 'OPT_08_01_A',
            text: 'Le digo a Pablito que no la toque y llamo a mi tío para que supervise',
            type: 'SEGURA',
            riskLevel: 'bajo',
            feedback: '¡Excelente! Las estrellitas parecen inofensivas pero alcanzan temperaturas altísimas. Un niño de 7 años no debe manejar pirotecnia. Llamar al adulto es la decisión correcta.'
          },
          {
            id: 'OPT_08_01_B',
            text: 'Le doy la estrellita a Pablito pero le digo que la sostenga lejos de su cuerpo',
            type: 'MUY_RIESGOSA',
            riskLevel: 'alto',
            feedback: '¡Muy peligroso! Las estrellitas pueden quemar la ropa, el pelo y la piel en un instante. Un niño pequeño no tiene la coordinación para manejarlas de forma segura. Nunca le des pirotecnia a un niño pequeño.'
          },
          {
            id: 'OPT_08_01_C',
            text: 'Agarro yo la estrellita y la sostengo para que Pablito la vea de cerca',
            type: 'RIESGOSA',
            riskLevel: 'medio',
            feedback: 'Aunque tú la sostengas, acercar a un niño pequeño a una estrellita encendida es riesgoso. Las chispas pueden saltar y quemarlo. Es mejor que los niños vean la pirotecnia desde lejos.'
          }
        ]
      },
      {
        id: 'DP_08_02',
        question: 'Tu primo de 15 años quiere encender un cohete grande él solo, sin que tu tío lo supervise. Te pide que lo ayudes a sostenerlo. ¿Qué haces?',
        context: 'El cohete es grande y dice "solo para adultos" en la etiqueta. Tu tío está adentro sirviendo la cena.',
        options: [
          {
            id: 'OPT_08_02_A',
            text: 'Le digo que no y voy a buscar a mi tío porque dice que es solo para adultos',
            type: 'SEGURA',
            riskLevel: 'bajo',
            feedback: '¡Muy valiente! Decir que no a un primo mayor requiere coraje. Los cohetes grandes pueden explotar en las manos si se encienden mal. Solo los adultos deben manejar pirotecnia grande.'
          },
          {
            id: 'OPT_08_02_B',
            text: 'Lo ayudo a sostenerlo porque él ya tiene 15 años y sabe lo que hace',
            type: 'MUY_RIESGOSA',
            riskLevel: 'alto',
            feedback: '¡Muy peligroso! La edad no garantiza seguridad con pirotecnia. Cada año, miles de adolescentes sufren quemaduras graves por manejar cohetes. La etiqueta dice "solo para adultos" por una razón.'
          },
          {
            id: 'OPT_08_02_C',
            text: 'Me alejo pero no digo nada para no parecer miedoso',
            type: 'RIESGOSA',
            riskLevel: 'medio',
            feedback: 'Alejarte te protege a ti, pero tu primo sigue en peligro. Avisar a un adulto no es ser miedoso, es ser inteligente. Los guardianes cuidan a todos, no solo a sí mismos.'
          }
        ]
      },
      {
        id: 'DP_08_03',
        question: 'Un cohete que encendió tu tío no explotó. Después de un minuto, tu primo quiere ir a revisarlo. ¿Qué haces?',
        context: 'El cohete está en el piso, aparentemente apagado. Pero la mecha podría seguir encendida por dentro.',
        options: [
          {
            id: 'OPT_08_03_A',
            text: 'Le digo que nadie se acerque y que hay que esperar mucho tiempo o echarle agua desde lejos',
            type: 'SEGURA',
            riskLevel: 'bajo',
            feedback: '¡Perfecto! Los cohetes que no explotan son extremadamente peligrosos. Pueden explotar en cualquier momento. La regla es: nunca te acerques a pirotecnia que no explotó. Espera al menos 15 minutos y mójalo con agua desde lejos.'
          },
          {
            id: 'OPT_08_03_B',
            text: 'Voy con mi primo a revisarlo rápido para ver si la mecha se apagó',
            type: 'MUY_RIESGOSA',
            riskLevel: 'alto',
            feedback: '¡Extremadamente peligroso! Los cohetes fallidos pueden explotar en tu cara cuando te acercas. Cada año hay niños que pierden dedos y sufren quemaduras graves por acercarse a pirotecnia que no explotó.'
          },
          {
            id: 'OPT_08_03_C',
            text: 'Le tiro una piedra desde lejos para ver si explota',
            type: 'MUY_RIESGOSA',
            riskLevel: 'alto',
            feedback: '¡No! Golpear un cohete fallido puede hacerlo explotar de forma impredecible. Las esquirlas pueden alcanzarte incluso desde lejos. Solo un adulto debe manejar esta situación con agua.'
          }
        ]
      },
      {
        id: 'DP_08_04',
        question: 'Al día siguiente, encuentras restos de cohetes y estrellitas en el patio. Algunos todavía tienen pólvora. ¿Qué haces?',
        context: 'Hay restos de pirotecnia por todo el patio. Algunos parecen tener pólvora sin quemar.',
        options: [
          {
            id: 'OPT_08_04_A',
            text: 'No toco nada y le digo a mi abuelo que hay restos de pirotecnia que pueden ser peligrosos',
            type: 'SEGURA',
            riskLevel: 'bajo',
            feedback: '¡Excelente! Los restos de pirotecnia pueden contener pólvora activa que se enciende con calor o fricción. Un adulto debe recogerlos con cuidado y mojarlos antes de botarlos.'
          },
          {
            id: 'OPT_08_04_B',
            text: 'Recojo los restos y los junto para ver si puedo hacer mi propio cohete',
            type: 'MUY_RIESGOSA',
            riskLevel: 'alto',
            feedback: '¡Nunca jamás hagas esto! Juntar pólvora de restos de pirotecnia es extremadamente peligroso. Puede explotar en tus manos. Esto ha causado accidentes gravísimos a muchos niños.'
          },
          {
            id: 'OPT_08_04_C',
            text: 'Los barro con la escoba hacia la calle',
            type: 'RIESGOSA',
            riskLevel: 'medio',
            feedback: 'Barrer restos de pirotecnia puede generar fricción que encienda la pólvora restante. Es mejor que un adulto los recoja con cuidado, los moje y los deseche de forma segura.'
          }
        ]
      }
    ]
  }
];

export function getRandomStory(): Story {
  const randomIndex = Math.floor(Math.random() * STORY_DATABASE.length);
  return STORY_DATABASE[randomIndex];
}

export function getStoryById(id: string): Story | undefined {
  return STORY_DATABASE.find(story => story.id === id);
}
