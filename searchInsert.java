Java Search Insert Position

class Solution {
    public int searchInsert(int[] nums, int target) {
        int[] arr = new int[nums.length + 1];
        
        for(int i = 0; i < nums.length; i++){
            if(nums[i] == target){
                return i;
            } else{
                arr[i] = nums[i];
            }
        }
        arr[nums.length] = target;
        Arrays.sort(arr);
        
        for(int i = 0; i < arr.length; i++){
            if(arr[i] == target){
                return i;
            }
        }
        return -1;
    }
}
