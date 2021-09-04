import React from 'react'
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps
} from 'react-native'

interface SkillCardProps extends TouchableOpacityProps {
  name: string
}

export function SkillCard({ name, ...rest }: SkillCardProps) {
  return (
    <TouchableOpacity style={styles.buttonSkill} {...rest}>
      <Text style={styles.textSkill}>{name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    marginHorizontal: 30,
    backgroundColor: '#1f1e25',
    borderRadius: 50,
    padding: 15,
    marginVertical: 5
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
