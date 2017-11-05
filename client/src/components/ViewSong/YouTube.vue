<<template>
<panel title="YouTube Video" >
    <youtube
      :video-id="youtubeId"
      :player-width="500"
      :player-height="230">
      </youtube>
</panel>
</template>
      
      <script>
      export default {
      
      }
      </script>
      
      <style>
      
      </style>
      >

    </youtube>
</panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'youtubeId'
  ],
  components: {
    Panel
  }

}
</script>

<style>

</style>
