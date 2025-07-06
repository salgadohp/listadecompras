import { View, Image, Text,TouchableOpacity } from "react-native"

import { Button } from "@/components/Button"

import { styles } from "./styles"
import { Input } from "@/components/Input"
import { Filter } from "@/components/Filter/Index"
import { FilterStatus } from "@/types/FilterStatus"

const FILTER_STATUS: FilterStatus[] = [FilterStatus.DONE, FilterStatus.PENDING]

export function Home(){
  return (
    <View style= {styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo}/>


      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Entrar" />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter key={status} status={status} isActive />
          ))}

          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}