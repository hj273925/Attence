/**
 * Created by hj on 2018/4/11.
 */
const titleType = {
  Q_SINGLE_CHOICE: '单选题',
  Q_MULTIPLE_CHOICE: '多选题',
  Q_RANKING: '排序题',
  Q_MATRIX: '矩阵题',
  Q_OPEN_ENDED: '开放题'

}
export default function titleTypeFilter(title) {
  return titleType[title] || ''
}
