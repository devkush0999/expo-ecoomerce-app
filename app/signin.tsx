import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'

type Props = {}

const SignInScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>SignIn Screen</Text>
      {/* <Link href={"/(tabs)"} asChild> */}
        <TouchableOpacity onPress={() => {
          router.dismissAll();
          router.push('/(tabs)');
        }}>
          <Text>Go to App Home Screen Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, nihil. Sunt aliquam cupiditate nesciunt molestiae magnam eveniet earum dolor natus laborum, ipsa explicabo eius asperiores sapiente incidunt fugit facere vitae atque, optio non voluptatibus error culpa repellat provident. Necessitatibus doloribus ducimus eum incidunt ad error deserunt consequatur, ea hic magni dolores, veritatis molestias animi, sapiente qui id dicta quisquam corporis. Nesciunt eaque nostrum repellendus dolorem quaerat ipsum eos natus id rem. Est itaque dolorem facere velit sapiente autem nam laudantium tempore animi repudiandae blanditiis quos, voluptas corporis dicta incidunt totam. Deserunt aperiam corrupti recusandae vel reprehenderit unde vitae architecto nesciunt! Repellat, sapiente animi similique, numquam dolore distinctio magni mollitia deleniti in quidem reprehenderit veniam consequatur exercitationem sequi laborum voluptate est ducimus facere nihil? Itaque accusantium repellendus debitis obcaecati natus earum quod, expedita provident facilis voluptates officia veniam eum nulla ab porro, ad corrupti? Voluptatem expedita corporis, ad fugiat recusandae voluptatum, minus dignissimos exercitationem repellendus quis excepturi nam nemo. Totam adipisci magni id minima placeat vero nihil. Architecto animi eum eveniet, quaerat illo inventore delectus reprehenderit modi nesciunt aut quidem blanditiis, necessitatibus veniam similique. Aliquam voluptate ad assumenda, deserunt optio obcaecati? Sit recusandae eum architecto nemo beatae? Inventore labore veritatis quasi excepturi, tenetur amet neque repudiandae unde odio dicta, voluptatibus accusantium non reprehenderit ipsam ut molestiae, sint sunt doloremque harum beatae temporibus! Minima ut, quas eligendi incidunt esse cupiditate dicta reiciendis fuga non saepe cum laudantium odio reprehenderit, perferendis rerum doloremque fugiat error aspernatur sequi hic ipsa facere, deserunt consequuntur. Minima provident earum laboriosam ratione alias possimus, maiores voluptas molestias doloremque aspernatur? Ratione voluptatum sed quo? Incidunt in sequi cum expedita deleniti, rem explicabo dolores mollitia exercitationem reiciendis similique obcaecati. Vel rem deserunt vitae fuga, quia magnam odit cumque, iste quis tempore repellat perferendis eligendi, eos facere officia ipsum veritatis a id est voluptates repudiandae ipsam? Tempora voluptatibus adipisci possimus maxime earum a amet obcaecati recusandae. Aliquam, nesciunt et. Pariatur dolorum aspernatur saepe cumque ipsam nihil, optio a dignissimos, perferendis ea quas explicabo natus impedit maiores minima aliquid commodi sequi omnis minus, rem repellat voluptate alias! Quisquam consequatur, aperiam vero nobis reiciendis iusto beatae totam deleniti porro labore accusamus quasi enim et at quae amet aspernatur ab laudantium molestias rem illum, commodi minus, nostrum perspiciatis. Laborum nemo dicta ducimus ea sed deleniti, temporibus officia, praesentium illum et nihil magnam omnis animi non. Rem earum molestias veniam iure repellat saepe nisi?</Text>
        </TouchableOpacity>
      {/* </Link> */}
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})